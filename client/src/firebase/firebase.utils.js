import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCz7OylZbRY_uf0YcQ2EtiPAxGoOQGmZAE",
  authDomain: "crwn-db-d6932.firebaseapp.com",
  databaseURL: "https://crwn-db-d6932.firebaseio.com",
  projectId: "crwn-db-d6932",
  storageBucket: "crwn-db-d6932.appspot.com",
  messagingSenderId: "376342698346",
  appId: "1:376342698346:web:5d66a45989db117eed6d13",
  measurementId: "G-F8918N8ZGE"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  //batch transforms all calls ( like set() ) into one big group, therefore the code is consistent because if some call doesn't work then the whole app won't work but won't have bugs.
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertSearchedSnapshotToMap = collections => {
  ///////////////
  const transformedCollection = collections.docs.map(doc => {
    // const { title, items } = doc.data();
    // console.log("searchedToMap", doc.data());
    console.log("searchedSnapshot");
    return doc.data();
    // return {
    //   routeName: encodeURI(title.toLowerCase()),
    //   id: doc.id,
    //   title,
    //   items
    // };
  });
  console.log("searchedToMap", transformedCollection);

  // return transformedCollection.reduce((accumulator, collection) => {
  //   accumulator[collection.title.toLowerCase()] = collection;

  //   return accumulator;
  // }, {});
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
