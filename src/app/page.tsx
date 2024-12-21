import { Board } from "@/components/Board/Board"
import styles from "./page.module.css"
import StoreProvider from "./StoreProvider"
import RootLayout from "./layout"

async function getTasks() {
  const isProduction = process.env.NODE_ENV === "production";

  const baseURL = isProduction  && process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/tasks.json";

  const res = await fetch(baseURL, {
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
  <RootLayout>
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
  </RootLayout>
  )
}
