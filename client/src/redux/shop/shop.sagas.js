import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
  convertSearchedSnapshotToMap
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
    //Put is the redux-saga way of dispatching actions
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  //Think of take as: I'm taking an action from the regular Redux flow
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* fetchSearchedElementsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_SEARCHED_ELEMENTS_START,
    fetchSearchedElementsAsync
  );
}

export function* fetchSearchedElementsAsync() {
  try {
    // const collectionRef = firestore
    //   .collection("users")
    //   .where("displayName", ">=", "jeje");
    // var query = "a";
    const collectionRef = firestore.collectionGroup("items");
    // .orderByChild("users")
    // .startAt(`%${query}%`)
    // .endAt(query + "\uf8ff")
    // .once("value");
    // const collectionRef = firestore.collection("collections");
    // const collectionGroup = collectionRef.collection("items");
    // const cc = collectionRef.collectionGroup("items").where("name", ">", "f");
    // const collectionRef = firestore
    //   .collection("collections")
    //   .where("price", ">", 200);
    console.log("collectionRef", collectionRef);
    const snapshot = yield collectionRef.get();

    /*
    console.log("collectionRef", collectionRef);
    console.log("snapshot", snapshot);

    snapshot.docs.map(doc => {
      const data = doc.data();
      const { title } = doc.data();
      console.log(data);
      console.log(title);
    });
    */
    const collectionsMap = yield call(convertSearchedSnapshotToMap, snapshot);
    console.log(collectionsMap);
    // yield put(fetchCollectionsSuccess(collectionsMap));
    //Put is the redux-saga way of dispatching actions
  } catch (error) {
    // yield put(fetchCollectionsFailure(error.message));
  }
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
    // call(fetchSearchedElementsAsync)
    //  call(fetchSearchedElementsStart),
  ]);
}
