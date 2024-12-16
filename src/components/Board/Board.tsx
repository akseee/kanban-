"use client"

import { statuses } from "@/lib/types"
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core"
import { StatusList } from "../StatusList/StatusList"

import styles from "./Board.module.css"
import { useDispatch } from "@/lib/store"
import { moveTask } from "@/lib/docsSlice"

export const Board = () => {
  const dispatch = useDispatch()

  const handleDragStart = (event: DragStartEvent) => {
    console.log(event.activatorEvent)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over!.id) {
      dispatch(moveTask({ id: active.id, status: over!.id }))
    }
  }

  return (
    <div className={styles.board}>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <ul className={styles.list}>
          {statuses.map((status) => (
            <StatusList status={status} key={status} />
          ))}
        </ul>
      </DndContext>
    </div>
  )
}
