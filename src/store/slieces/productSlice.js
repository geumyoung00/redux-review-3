import { createSlice, nanoid } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "product",
  initialState: { list: [], searchTerm: "" },
  reducers: {
    addItem(state, action) {
      //action.payload = {name: '양말', cost : 12,}
      // ...action.payload, id: nanoId();
      state.list.push({ ...action.payload, id: nanoid() })
    },
    removeItem(state, action) {
      console.log("연결됨")
    },
    searchTermChange(state, action) {
      console.log("연결됨")
    },
  },
})

export default productSlice
export const { addItem, removeItem, searchTermChange } = productSlice.actions
