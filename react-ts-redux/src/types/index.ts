import { dispatchAdd, dispatchDelete } from '@/store'

export interface ToDoItem {
  text: string,
  id: number
}

export interface ToDoList {
  toDoList: ToDoItem[]
}

export type ToDoAction = | ReturnType<typeof dispatchAdd> | ReturnType<typeof dispatchDelete>
