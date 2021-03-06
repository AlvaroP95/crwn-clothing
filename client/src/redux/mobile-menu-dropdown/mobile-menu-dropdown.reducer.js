import MobileMenuActionTypes from "./mobile-menu-dropdown.types";

const INITIAL_STATE = {
  visibility: true
};

const mobileMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MobileMenuActionTypes.TOGGLE_MOBILE_MENU_VISIBILITY:
      return {
        ...state,
        visibility: !state.visibility
      };
    case MobileMenuActionTypes.CLOSE_MOBILE_MENU:
      return {
        ...state,
        visibility: true
      };
    default:
      return state;
  }
};

export default mobileMenuReducer;
