import { configureStore } from "@reduxjs/toolkit"
import { formReducer, nameChange, costChange } from "./slieces/formSlice"
import {
  productReducer,
  addItem,
  removeItem,
  searchTermChange,
} from "./slieces/productSlice"

export const store = configureStore({
  reducer: {
    form: formReducer,
    product: productReducer,
  },
})

export { nameChange, costChange, addItem, removeItem, searchTermChange }
