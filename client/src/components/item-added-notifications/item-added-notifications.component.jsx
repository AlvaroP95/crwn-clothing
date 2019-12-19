import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectRecentlyAddedItem,
  selectRecentlyAddedVisibility
} from "../../redux/recently-added-items/recently-added-items.selectors";
import {
  removeRecentlyAddedItem,
  toggleVisibility
} from "../../redux/recently-added-items/recently-added-items.actions";

import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import {
  ItemAddedNotificationContainer,
  ItemAddedNotificationSubContainer
} from "./item-added-notifications.styles";

const ItemAddedNotificationsContainer = ({
  recentlyAddedItem,
  removeRecentlyAddedItem,
  isVisible,
  toggleVisibility,
  history
}) => {
  const [itemName, setItemName] = useState(recentlyAddedItem.name);
  return (
    <>
      <ItemAddedNotificationContainer className={isVisible ? "Open" : "Close"}>
        <ItemAddedNotificationSubContainer>
          <CustomButton
            onClick={() => {
              setItemName(recentlyAddedItem.name);
              removeRecentlyAddedItem();
              history.push("/checkout");
            }}
            itemAddedGoToCheckout
          >
            {isVisible
              ? recentlyAddedItem.name + " ADDED"
              : itemName + " ADDED"}
            <br /> CLICK TO CHECKOUT
          </CustomButton>
          <CustomButton
            onClick={() => {
              setItemName(recentlyAddedItem.name);
              removeRecentlyAddedItem();
              toggleVisibility();
            }}
            closeItemAdded
          >
            &#10005;
          </CustomButton>
        </ItemAddedNotificationSubContainer>
      </ItemAddedNotificationContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  recentlyAddedItem: selectRecentlyAddedItem,
  isVisible: selectRecentlyAddedVisibility
});

const mapDispatchToProps = dispatch => ({
  removeRecentlyAddedItem: () => dispatch(removeRecentlyAddedItem()),
  toggleVisibility: () => dispatch(toggleVisibility())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemAddedNotificationsContainer)
);
