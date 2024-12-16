import { StatusList } from "@/components/StatusList/StatusList"
import styles from "./page.module.css"
import { Task } from "@/components/Task/Task"

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Simple Kanban</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.board}>
          <ul className={styles.list}>
            <StatusList status="Done" style="done">
              {Array.from({ length: 2 }, (_, index) => {
                return (
                  <Task
                    key={index}
                    editing={false}
                    text={"Original from done"}
                  ></Task>
                )
              })}
            </StatusList>
            <StatusList status="In-Progress" style="progress">
              {Array.from({ length: 7 }, (_, index) => {
                return (
                  <Task
                    key={index}
                    editing={false}
                    text={"Original from progress"}
                  ></Task>
                )
              })}
            </StatusList>
            <StatusList status="Pending" style="pending">
              {Array.from({ length: 7 }, (_, index) => {
                return (
                  <Task
                    key={index}
                    editing={false}
                    text={"Original from pending"}
                  ></Task>
                )
              })}
            </StatusList>
          </ul>
        </div>
      </main>
    </div>
  )
}
