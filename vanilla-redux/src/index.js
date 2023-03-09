import { createStore } from "redux";

const ADD_TODO = "ADD TODO";
const DELETE_TODO = "DELETE TODO";

const $form = document.querySelector('form');
const $toDolist = document.querySelector('ul');

const createToDo = (toDo) => {
  const li = document.createElement('li');
  li.innerText = toDo;
  $toDolist.appendChild(li)
}

const onSubmit = (e) => {
  e.preventDefault()
  const toDoInput = e.target.toDo.value
  e.target.toDo.value = ''
  createToDo(toDoInput)
}

$form.addEventListener('submit', onSubmit)
