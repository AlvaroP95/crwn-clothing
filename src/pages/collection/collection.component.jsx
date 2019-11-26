import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import React from "react";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2>collection p`ge</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
  //It takes state as second function because selectCollection has a function that takes collectionId and that function takes collections
});
export default connect(mapStateToProps)(CollectionPage);
