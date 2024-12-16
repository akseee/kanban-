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
      console.log("added")
    },
    editTask(state, { payload }) {
      const task = state.tasks.find((task) => task.id === payload.id)
      if (task) task.text = payload.text
      console.log("edited")
    },
    moveTask(state, { payload }) {
      const task = state.tasks.find((task) => task.id === payload.id)
      if (task) task.status = payload.status
      console.log("moved")
    },
    removeTask(state, { payload }) {
      state.tasks = state.tasks.filter((task) => task.id !== payload.id)
      console.log("removed")
    },
  },
})

export const { loadTasks, addTask, moveTask, editTask, removeTask } =
  docsSlice.actions
export default docsSlice.reducer
