import { TTask } from "./types"
import { createSlice } from "@reduxjs/toolkit"

type TasksState = {
  tasks: TTask[]
}

const initialState: TasksState = {
  tasks: [],
}

const docsSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadTasks(state, { payload }) {
      console.log("loaded in redux")
      state.tasks = payload
    },
    addTask(state, { payload }) {
      state.tasks.push({
        id: Date.now(),
        text: payload.text,
        status: payload.status,
      })
    },
    moveTask(state, { payload }) {
      const task = state.tasks.find((task) => task.id === payload.id)
      if (task) task.status = payload.status
    },
  },
})

export const { loadTasks, addTask, moveTask } = docsSlice.actions
export default docsSlice.reducer
