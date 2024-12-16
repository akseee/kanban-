"use client"

import clsx from "clsx"
import styles from "./StatusList.module.css"
import { FC, ReactNode } from "react"

type StatusListProps = {
  status: string
  style: string
  children: ReactNode
}

export const StatusList: FC<StatusListProps> = ({
  status,
  style,
  children,
}) => {
  return (
    <li className={clsx(styles.statusContainer, styles[style])}>
      <h3 className={styles.status}>{status}</h3>
      <button
        onClick={() => {
          console.log(status)
        }}
        className={styles.add}
      >
        +
      </button>
      <ul className={clsx(styles.tasks, styles[style])}>{children}</ul>
    </li>
  )
}
