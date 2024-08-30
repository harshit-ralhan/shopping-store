import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";
import homeItemsSlice from "./homeItemsSlice";

const nailStore = configureStore({
  reducer: {
    bag: bagSlice.reducer,
    homeItems: homeItemsSlice.reducer,
  }
})

export default nailStore;