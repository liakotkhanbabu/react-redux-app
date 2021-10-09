import { configureStore } from "@reduxjs/toolkit"
import itemListReducer from "./slices/itemListSlice"

const store = configureStore({
   reducer: {
      itemList: itemListReducer,
   },
})

export default store
