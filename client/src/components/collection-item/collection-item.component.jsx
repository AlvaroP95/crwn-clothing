import { connect } from "react-redux";
import React from "react";
import { addItem } from "../../redux/cart/cart.actions";
import { setRecentlyAddedItem } from "../../redux/recently-added-items/recently-added-items.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, setRecentlyAddedItem }) => {
  const { name, price, imageUrl } = item;
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
