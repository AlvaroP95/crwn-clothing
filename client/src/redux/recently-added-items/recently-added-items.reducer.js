import RecentlyAddedItemsTypes from "./recently-added-items.types";
import { addRecentlyAddedItem } from "./recently-added-items.utils";

const INITIAL_STATE = {
  item: {},
  isVisible: false
};

const recentlyAddedItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecentlyAddedItemsTypes.SET_RECENTLY_ADDED_ITEM:
      return {
        ...state,
        item: addRecentlyAddedItem(state.item, action.payload),
        isVisible: true
      };
    case RecentlyAddedItemsTypes.REMOVE_RECENTLY_ADDED_ITEM:
      return {
        ...state,
        item: {},
        isVisible: false
      };

    default:
      return state;
  }
};

export default recentlyAddedItemsReducer;
