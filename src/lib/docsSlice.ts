import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  docs: [],
}

const docsSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {
    initializeDocs(state, { payload }) {
      state.docs = payload
    },
  },
})

export const { initializeDocs } = docsSlice.actions
export default docsSlice.reducer
