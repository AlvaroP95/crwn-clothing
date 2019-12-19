import MobileMenuActionTypes from "./mobile-menu-dropdown.types";

export const toggleMobileMenuVisibility = () => ({
  type: MobileMenuActionTypes.TOGGLE_MOBILE_MENU_VISIBILITY
});

export const closeMobileMenu = () => ({
  type: MobileMenuActionTypes.CLOSE_MOBILE_MENU
});
