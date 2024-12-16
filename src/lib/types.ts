export type TStatus = "done" | "progress" | "pending"

export const statuses: TStatus[] = ["done", "progress", "pending"]

export type TTask = {
  id: number
  status: TStatus
  text: string
}
