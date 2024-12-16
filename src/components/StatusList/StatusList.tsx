"use client"

import clsx from "clsx"
import styles from "./StatusList.module.css"
import { FC, ReactNode } from "react"
import { TStatus, TTask } from "@/lib/types"
import { Task } from "../Task/Task"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useDispatch } from "@/lib/store"
import { addTask } from "@/lib/docsSlice"
import { useDroppable } from "@dnd-kit/core"

type StatusListProps = {
  status: TStatus
  tasks: TTask[]
}

export const StatusList: FC<StatusListProps> = ({ status, tasks }) => {
  const filteredTasks = tasks.filter((item: TTask) => item.status === status)
  const dispatch = useDispatch()

  const handleAdd = () => {
    const text = prompt("Временное решение для задачи")
    if (text) dispatch(addTask({ text, status }))
  }

  return (
    <li className={clsx(styles.statusContainer, styles[status])}>
      <h3 className={styles.status}>{status}</h3>
      <button onClick={handleAdd} className={styles.add}>
        +
      </button>

      <Droppable id={status}>
        <SortableContext
          items={filteredTasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className={clsx(styles.tasks, styles[status])}>
            {filteredTasks.map((task: TTask) => {
              return <Task key={task.id} task={task}></Task>
            })}
          </ul>
        </SortableContext>
      </Droppable>
    </li>
  )
}

type DroppableProps = {
  id: number | string
  children: ReactNode
}

function Droppable({ id, children }: DroppableProps) {
  const { setNodeRef } = useDroppable({
    id,
  })

  return <div ref={setNodeRef}>{children}</div>
}
