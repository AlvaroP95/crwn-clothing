import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  selectCollectionsForPreview,
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  CollectionItemsContainer
} from "../collection/collection.styles";
import { SearchedForText, SearchedItem } from "./searched-items.styles";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const SearchedItems = ({
  collections,
  fetchCollectionsStart,
  isFetching,
  isLoaded,
  location
}) => {
  useEffect(() => {
    if (!isFetching && !isLoaded) {
      fetchCollectionsStart();
    }
  }, [fetchCollectionsStart, isFetching, isLoaded]);
  let query = location.state.searchedItems;
  let searched = collections.map(({ items }) => {
    return items.filter(
      item => item.name.toLowerCase().includes(query.toLowerCase()) === true
    );
  });

  let foundItems = searched.reduce((accumulator, item) => {
    item.map(item => {
      accumulator.push(item);
    });
    return accumulator;
  }, []);

  return (
    <CollectionPageContainer>
      <SearchedForText>
        {foundItems.length > 0 ? "Results " : "No results "}for{" "}
      </SearchedForText>
      <SearchedItem>{location.state.searchedItems}</SearchedItem>
      <CollectionItemsContainer>
        {foundItems.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isFetching: selectIsCollectionFetching,
  isLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchedItems)
);
