import { createSelector } from "reselect";

const selectMobileMenu = state => state.mobileMenu;

export const selectMobileMenuVisibility = createSelector(
  [selectMobileMenu],
  mobileMenu => mobileMenu.visibility
);
