import { createSlice, nanoid } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "product",
  initialState: { list: [], searchTerm: "" },
  reducers: {
    addItem(state, action) {
      state.list.push({ ...action.payload, id: nanoid() })
    },
    removeItem(state, action) {
      return { list: state.list.filter((item) => item.id !== action.payload) }
    },
    searchTermChange(state, action) {
      state.searchTerm = action.payload
    },
  },
})

export const { addItem, removeItem, searchTermChange } = productSlice.actions
export const productReducer = productSlice.reducer
