import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import { setRecentlyAddedItem } from "../../redux/recently-added-items/recently-added-items.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  // AddedSuccessfully,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, setRecentlyAddedItem }) => {
  const { name, price, imageUrl } = item;
  // const [itemBought, setItemBought] = useState("");
  // const [recentlyAddedItemsCount, setRecentlyAddedItemsCount] = useState(0);

  // return  <>
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>

      <AddButton
        onClick={() => {
          addItem(item);
          setRecentlyAddedItem(item);
        }}
        inverted
      >
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
  //</>
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  setRecentlyAddedItem: item => dispatch(setRecentlyAddedItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
