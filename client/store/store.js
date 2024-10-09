import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice.js'
import navSlice from './slices/navSlice.js'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    nav: navSlice,
  },
})