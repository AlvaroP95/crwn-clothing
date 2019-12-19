import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "../redux/shop/shop.reducer";
import recentlyAddedItemsReducer from "../redux/recently-added-items/recently-added-items.reducer";
import mobileMenuReducer from "./mobile-menu-dropdown/mobile-menu-dropdown.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  recentlyAddedItems: recentlyAddedItemsReducer,
  mobileMenu: mobileMenuReducer
});

export default persistReducer(persistConfig, rootReducer);
