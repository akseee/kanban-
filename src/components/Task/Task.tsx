"use client"

import clsx from "clsx"
import styles from "./Task.module.css"
import { FC, ReactNode } from "react"
import { useDraggable } from "@dnd-kit/core"
import { TTask } from "@/lib/types"

type TaskUIProps = {
  editing: boolean
  task: TTask
}

export const Task: FC<TaskUIProps> = ({ editing, task }) => {
  return (
    <Draggable task={task} key={task.id} disabled={false}>
      <li className={styles.task}>
        <textarea
          disabled={!editing}
          className={styles.taskText}
          aria-label="Описание задачи"
          placeholder="Введите задачу"
          value={task.text}
        ></textarea>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => console.log("edit")}
            className={clsx(styles.remove, styles.button)}
          >
            edit
          </button>
          <button
            onClick={() => console.log("remove")}
            className={clsx(styles.remove, styles.button)}
          >
            remove
          </button>
        </div>
      </li>
    </Draggable>
  )
}

type DraggableProps = {
  task: TTask
  children: ReactNode
  disabled: boolean
}

export const Draggable: FC<DraggableProps> = ({ task, disabled, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: task,
    disabled: disabled,
  })

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  )
}
