import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "../redux/shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
  //I don't include the user reducer in the whitelist because Firebase handles it
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
