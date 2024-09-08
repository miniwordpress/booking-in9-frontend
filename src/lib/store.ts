import { configureStore } from '@reduxjs/toolkit'
import { combinedReducer } from './features'
import { createWrapper } from 'next-redux-wrapper'
import { packagesAPI } from './features/Package'
import { nationalityAPI } from './features/Nationality'
import { authAPI } from './features/Auth'

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false
      })
        .concat(authAPI.middleware)
        .concat(packagesAPI.middleware)
        .concat(nationalityAPI.middleware)
    }
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false })