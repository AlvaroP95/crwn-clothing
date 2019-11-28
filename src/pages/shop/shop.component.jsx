import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    /* 
      This method has the actual needed data too nested 
      // fetch(
      //   "https://firestore.googleapis.com/v1/projects/crwn-db-d6932/databases/(default)/documents/collections"
      // )
      //   .then(response => response.json())
      //   .then(collections => console.log(collections));
    */
    /*
      get() doesn't let you know when there is an update, unlike onSnapshot
    */
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    /* 
      onSnapshot is a listener/observable that let you know whenever the snapshot is updated (or created for the first time)
      //ARE THE SAME BUT THIS ONE IS WITH FIREBASE
      // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      //   updateCollections(collectionsMap);
      //   this.setState({ loading: false });
      // });
    */
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
