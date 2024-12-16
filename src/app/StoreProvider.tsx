"use client"
import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "../lib/store"
import { initializeDocs } from "@/lib/docsSlice"
import { TTask } from "@/lib/types"

export default function StoreProvider({
  tasks,
  children,
}: {
  tasks: TTask[]
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeDocs(tasks))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
