import { createSlice } from "@reduxjs/toolkit"
import { addItem } from "./productSlice"

const formSlice = createSlice({
  name: "form",
  initialState: { name: "", cost: "" },
  reducers: {
    nameChange(state, actions) {
      state.name = actions.payload
    },
    costChange(state, actions) {
      state.cost = actions.payload
    },
  },
  extraReducers: (build) => {
    build.addCase(addItem, (state, action) => {
      state.cost = ""
      state.name = ""
    })
  },
})

export const { nameChange, costChange } = formSlice.actions
export default formSlice
