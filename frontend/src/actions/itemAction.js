import axios from "axios"

const listItems = () => async (dispatch) => {
   try {
      dispatch({
         type: "ITEM_REQUEST",
      })
      const { data } = await axios.get("https://api.spacexdata.com/v3/launches")

      dispatch({
         type: "ITEM_SUCCESS",
         payload: data,
      })
   } catch (error) {
      dispatch({
         type: "ITEM_FAIL",
         payload: error,
      })
   }
}

export default listItems
