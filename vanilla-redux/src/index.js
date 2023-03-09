import { createStore } from "redux";

const ADD_TODO = "ADD TODO";
const DELETE_TODO = "DELETE TODO";

const $form = document.querySelector('form');
const $input = document.querySelector('input')
const $toDolist = document.querySelector('ul');

const setLocalStorage = (toDos) => {
  const toDoList = JSON.stringify(toDos)
  window.localStorage.setItem('ToDos', toDoList)
}

const reducer = (state, action) => {
  console.log(state, action)
  if (state === undefined) {
    return {
      toDoList: []
    }
  }
  switch(action.type) {
    case ADD_TODO: {
      const newToDoList = [{ text: action.text, id: Date.now() }, ...state.toDoList]
      const newState = Object.assign({}, state, {
        toDoList: newToDoList
      })
      console.log(newState)
      setLocalStorage(newToDoList)
      return newState
    }
    case DELETE_TODO : {
      const newToDoList = state.toDoList.filter((toDo) => {
        return toDo.id !== action.id
      })
      const newState = Object.assign({}, state, {
        toDoList: newToDoList
      })
      setLocalStorage(newToDoList)
      console.log(newState)
      return newState
    }
    default: {
      return state
    }
  }
}
const store = createStore(reducer)

const deleteTodo = (e) => {
  const id = e.target.parentNode.id
  store.dispatch({ type: DELETE_TODO, id: parseInt(id) })
}

const paintTodo = () => {
  // const state = store.getState();
  const localToDosList = JSON.parse(window.localStorage.getItem('ToDos'))
  $toDolist.innerHTML = '';
  localToDosList.map((toDo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button')
    btn.innerText = 'Del';
    btn.addEventListener('click', deleteTodo)
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn)
    $toDolist.appendChild(li);
  });
}
store.subscribe(paintTodo)

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text })
}

const onSubmit = (e) => {
  e.preventDefault()
  const toDoValue = $input.value
  $input.value = ''
  addToDo(toDoValue)
}

$form.addEventListener('submit', onSubmit)