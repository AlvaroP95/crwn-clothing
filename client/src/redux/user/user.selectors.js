import { createSelector } from "reselect";

//20. Selectors in Redux. 21. Reselect Library
//Selectors allow components to not re-render whenever mapStateToProps is called. Components render only when the corresponding values/state updates

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectIsUserLogging = createSelector(
  [selectUser],
  user => user.isLoading
);
