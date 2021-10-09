import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios"

export const getListItems = createAsyncThunk(
   "itemList/getListItems",
   // eslint-disable-next-line no-unused-vars
   async (dispatch, getState) =>
      axios
         .get("https://api.spacexdata.com/v3/launches")
         .then((res) => res.data),
)

const itemListSlice = createSlice({
   name: "itemList",
   initialState: {
      lists: [],
      status: null,
   },
   extraReducers: {
      // eslint-disable-next-line no-unused-vars
      [getListItems.pending]: (state, action) => {
         // eslint-disable-next-line no-param-reassign
         state.status = "loading"
      },
      [getListItems.fulfilled]: (state, action) => {
         // eslint-disable-next-line no-param-reassign
         state.lists = action.payload
         // eslint-disable-next-line no-param-reassign
         state.status = "success"
      },
      [getListItems.rejected]: (state) => {
         // eslint-disable-next-line no-param-reassign
         state.status = "failed"
      },
   },
})

export default itemListSlice.reducer
