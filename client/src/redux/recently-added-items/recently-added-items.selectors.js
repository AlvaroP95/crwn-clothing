import { createSelector } from "reselect";

const selectRecentlyAdded = state => state.recentlyAddedItems;

export const selectRecentlyAddedItem = createSelector(
  [selectRecentlyAdded],
  recentlyAddedItems => recentlyAddedItems.item
);

export const selectRecentlyAddedVisibility = createSelector(
  [selectRecentlyAdded],
  recentlyAddedItems => recentlyAddedItems.isVisible
);
