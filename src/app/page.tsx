import { StatusList } from "@/components/StatusList/StatusList"
import styles from "./page.module.css"
import { Task } from "@/components/Task/Task"
import StoreProvider from "./StoreProvider"
import { TTask } from "@/lib/types"

async function getTasks() {
  const res = await fetch("http://localhost:3000/tasks.json", {
    next: { revalidate: 0 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch tasks")
  }

  return res.json()
}

export default async function Home() {
  const tasks = await getTasks()

  return (
    <StoreProvider tasks={tasks}>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Simple Kanban</h1>
        </header>
        <main className={styles.main}>
          <div className={styles.board}>
            <ul className={styles.list}>
              <StatusList status="Done" style="done">
                {tasks
                  .filter((item: TTask) => item.status === "Done")
                  .map((item: TTask, index: number) => {
                    return (
                      <Task key={index} editing={false} text={item.text}></Task>
                    )
                  })}
              </StatusList>
              <StatusList status="In-Progress" style="progress">
                {tasks
                  .filter((item: TTask) => item.status === "In-progress")
                  .map((item: TTask, index: number) => {
                    return (
                      <Task key={index} editing={false} text={item.text}></Task>
                    )
                  })}
              </StatusList>
              <StatusList status="Pending" style="pending">
                {tasks
                  .filter((item: TTask) => item.status === "Pending")
                  .map((item: TTask, index: number) => {
                    return (
                      <Task key={index} editing={false} text={item.text}></Task>
                    )
                  })}
              </StatusList>
            </ul>
          </div>
        </main>
      </div>
    </StoreProvider>
  )
}
