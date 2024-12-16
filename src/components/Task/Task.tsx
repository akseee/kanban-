"use client"
import clsx from "clsx"
import styles from "./Task.module.css"
import { FC, ReactNode, useRef, useState } from "react"
import { useDraggable } from "@dnd-kit/core"
import { TTask } from "@/lib/types"
import { useDispatch } from "@/lib/store"
import { editTask, removeTask } from "@/lib/docsSlice"

type TaskUIProps = {
  task: TTask
}

export const Task: FC<TaskUIProps> = ({ task }) => {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(task.text)
  const textRef = useRef<HTMLTextAreaElement>(null)

  const dispatch = useDispatch()

  const handleEditClick = () => {
    setEditing(true)
    textRef.current?.focus()
  }

  const handleSaveClick = () => {
    setEditing(false)
    dispatch(editTask({ id: task.id, text }))
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleRemove = () => {
    dispatch(removeTask({ id: task.id }))
  }

  return (
    <Draggable task={task} key={task.id} disabled={editing}>
      <li className={clsx(styles.task, editing && styles.editing)}>
        <textarea
          ref={textRef}
          onChange={handleTextChange}
          disabled={!editing}
          className={styles.taskText}
          aria-label="Описание задачи"
          placeholder="Введите задачу"
          value={text}
        ></textarea>

        <div className={styles.buttonsContainer}>
          {!editing && (
            <button
              type="button"
              onClick={handleEditClick}
              className={clsx(styles.edit, styles.button)}
            >
              edit
            </button>
          )}
          {editing && (
            <button
              type="button"
              onClick={handleSaveClick}
              className={clsx(styles[task.status], styles.save, styles.button)}
            >
              save
            </button>
          )}
          <button
            type="button"
            onClick={handleRemove}
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

  const checkElement = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement
    if (target.matches("button")) {
      e.stopPropagation()
    }
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div onPointerDown={checkElement}> {children}</div>
    </div>
  )
}
