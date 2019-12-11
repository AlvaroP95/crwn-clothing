import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { selectRecentlyAddedItem } from "../../redux/recently-added-items/recently-added-items.selectors";
import { connect } from "react-redux";
import { removeRecentlyAddedItem } from "../../redux/recently-added-items/recently-added-items.actions";

import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import {
  ItemAddedNotificationContainer,
  ItemAddedNotificationSubContainer
} from "./item-added-notifications.styles";

const ItemAddedNotificationsContainer = ({
  recentlyAddedItem,
  removeRecentlyAddedItem,
  history
}) => {
  return (
    <>
      {Object.keys(recentlyAddedItem).length ? (
        <ItemAddedNotificationContainer>
          <ItemAddedNotificationSubContainer>
            <CustomButton
              onClick={() => {
                removeRecentlyAddedItem();
                history.push("/checkout");
              }}
              itemAddedGoToCheckout
            >
              {recentlyAddedItem.name} ADDED
              <br /> CLICK TO CHECKOUT
            </CustomButton>
            <CustomButton
              onClick={() => {
                removeRecentlyAddedItem();
              }}
              closeItemAdded
            >
              {/* {recentlyAddedItem.imageUrl} */}
              &#10005;
            </CustomButton>
          </ItemAddedNotificationSubContainer>
        </ItemAddedNotificationContainer>
      ) : null}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  recentlyAddedItem: selectRecentlyAddedItem
});

const mapDispatchToProps = dispatch => ({
  removeRecentlyAddedItem: () => dispatch(removeRecentlyAddedItem())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemAddedNotificationsContainer)
);
