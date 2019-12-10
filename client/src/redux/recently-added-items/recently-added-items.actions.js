import RecentlyAddedItemsActionTypes from "./recently-added-items.types";

export const setRecentlyAddedItem = item => ({
  type: RecentlyAddedItemsActionTypes.SET_RECENTLY_ADDED_ITEM,
  payload: item
});

export const removeRecentlyAddedItem = () => ({
  type: RecentlyAddedItemsActionTypes.REMOVE_RECENTLY_ADDED_ITEM
});
