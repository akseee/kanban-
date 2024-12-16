"use client"

import { statuses, TTask } from "@/lib/types"
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core"
import { StatusList } from "../StatusList/StatusList"

import styles from "./Board.module.css"
import { FC } from "react"
import { useDispatch } from "@/lib/store"
import { moveTask } from "@/lib/docsSlice"

type BoardProps = {
  tasks: TTask[]
}

export const Board: FC<BoardProps> = ({ tasks }) => {
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
            <StatusList status={status} tasks={tasks} key={status} />
          ))}
        </ul>
      </DndContext>
    </div>
  )
}
