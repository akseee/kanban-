import { Board } from "@/components/Board/Board"
import styles from "./page.module.css"
import StoreProvider from "./StoreProvider"

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
          <Board></Board>
        </main>
      </div>
    </StoreProvider>
  )
}
