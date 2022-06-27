import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counterSlices'
import nombre from './slices/useSlice'
export default configureStore({
  reducer: {
    counter ,
    nombre
  }
})