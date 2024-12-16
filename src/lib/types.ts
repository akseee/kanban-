export enum Status {
  DONE = "Done",
  PROGRESS = "In-progress",
  PENDING = "Pending",
}

export type TStatus = "Done" | "In-progress" | "Pending"

export type TTask = {
  id: number
  status: TStatus
  text: string
  // date: Date
}
