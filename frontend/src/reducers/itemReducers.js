const itemReducer = (state = { items: [] }, action) => {
   switch (action.type) {
      case "ITEM_REQUEST":
         return { loading: true, items: [] }
      case "ITEM_SUCCESS":
         return { loading: false, items: action.payload }
      case "ITEM_FAIL":
         return { loading: false, error: action.payload }
      default:
         return state
   }
}

export default itemReducer
