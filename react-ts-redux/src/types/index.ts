import { dispatchAdd, dispatchDelete } from '../store'

export interface ToDo {
  text: string,
  id: number
}

export interface ToDoList {
  toDoList: ToDo[]
}

export type ToDoAction = | ReturnType<typeof dispatchAdd> | ReturnType<typeof dispatchDelete>
