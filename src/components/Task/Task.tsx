"use client"

import clsx from "clsx"
import styles from "./Task.module.css"
import { FC } from "react"

type TaskUIProps = {
  editing: boolean

  text: string
}

export const Task: FC<TaskUIProps> = ({ editing, text }) => {
  return (
    <li className={styles.task}>
      <textarea
        disabled={!editing}
        className={styles.taskText}
        aria-label="Описание задачи"
        placeholder="Введите задачу"
        value={text}
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
  )
}
