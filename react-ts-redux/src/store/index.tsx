import { createStore } from "redux";
import { ToDoList, ToDoAction } from '../types'

const ADD = "ADD" as const
const DELETE = 'DELETE' as const

export const dispatchAdd = (text: string) => {
  return  {
  type: ADD,
  text
  }
};

export const dispatchDelete = (id: number) => {
  return {
  type: DELETE,
  id
  }
};

const initialState: ToDoList = {
  toDoList: []
}

const reducer = (state: ToDoList = initialState , action: ToDoAction): ToDoList => {
  switch(action.type) {
    case ADD: {
      const newToDoList = [{ text: action.text, id: Date.now() }, ...state.toDoList]
      const newState = Object.assign({}, state, {
        toDoList: newToDoList
      })
      return newState
    }
    case DELETE: {
      const newToDoList = state.toDoList.filter((toDo) => {
        return toDo.id !== action.id
      })
      const newState = Object.assign({}, state, {
        toDoList: newToDoList
      })
      return newState
    }
  }
  return state
}

const store = createStore(reducer)

export default store;