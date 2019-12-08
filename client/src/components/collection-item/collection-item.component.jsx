import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  AddedSuccessfully,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const [itemBought, setItemBought] = useState("");

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
          setItemBought("addedSuccessfully");
          setTimeout(() => {
            setItemBought("");
          }, 800);
        }}
        inverted
        addedSuccessfully
      >
        Add to cart
      </AddButton>
      {/* 
      {itemBought ? (
        <AddButton
          onClick={() => {
            addItem(item);
          }}
          addedSuccessfully
        >
          Added
        </AddButton>
      ) : (
        <AddButton
          onClick={() => {
            addItem(item);
            setItemBought("addedSuccessfully");
            setTimeout(() => {
              setItemBought("");
            }, 800);
          }}
          inverted
        >
          Add to cart
        </AddButton>
      )} */}
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
