import { configureStore } from "@reduxjs/toolkit"
import formSlice, { nameChange, costChange } from "./slieces/formSlice"
import productSlice, {
  addItem,
  removeItem,
  searchTermChange,
} from "./slieces/productSlice"

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    product: productSlice.reducer,
  },
})

export {
  formSlice,
  nameChange,
  costChange,
  addItem,
  removeItem,
  searchTermChange,
}
