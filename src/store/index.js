import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counterSlices'
import nombre from './slices/useSlice'
import types from './slices/typesSlice'
export default configureStore({
  reducer: {
    counter ,
    nombre,
    types
  }
})