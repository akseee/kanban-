import { configureStore } from "@reduxjs/toolkit"
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  useStore,
} from "react-redux"
import tasksReducer from "./docsSlice"

export const makeStore = () => {
  return configureStore({
    reducer: tasksReducer,
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

export const useDispatch: () => AppDispatch = () => dispatchHook()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
export const useAppStore = useStore.withTypes<AppStore>()
