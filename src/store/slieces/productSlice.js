import { createSlice, nanoid } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "product",
  initialState: { list: [], searchTerm: "" },
  reducers: {
    addItem(state, action) {
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

export const { addItem, removeItem, searchTermChange } = productSlice.actions
export const productReducer = productSlice.reducer
