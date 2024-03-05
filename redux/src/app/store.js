import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({ // empty Redux store
  reducer: {
    counter: counterReducer, 
  }, 
})