import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectIsUserLogging = createSelector(
  [selectUser],
  user => user.isLoading
);

export const selectHasAuthenticationError = createSelector(
  [selectUser],
  user => user.error
);

export const selectUserInputsBeforeLogin = createSelector(
  [selectUser],
  user => user.userInputsBeforeLogin
);
