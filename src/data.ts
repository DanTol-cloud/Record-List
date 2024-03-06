export enum ETypes {
  All = 'All',
  Current = 'Current',
  Completed = 'Completed',
}

export type RecordsType = {
  id: number
  title: string
  isDone: boolean
}
