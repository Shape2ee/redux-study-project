import { createStore } from "redux";

const $add = document.getElementById('add');
const $minus = document.getElementById('minus');
const $number = document.querySelector('span');

const reducer = (state, action) => {
  if (state === undefined) {
    return { count: 0}
  }
  let newState;
  console.log(state, action)
  if (action.type === 'ADD') {
    newState = Object.assign({}, state)
    newState.count += 1
  }
  if (action.type === 'MINUS') {
    newState = Object.assign({}, state)
    newState.count -= 1
  }
  return newState
}

const store = createStore(reducer)

const onChange = () => {
  const state = store.getState()
  $number.innerText = state.count
}
store.subscribe(onChange)

const handleAdd = () => {
  store.dispatch({type: "ADD"})
}

const handleMinus = () => {
  store.dispatch({type: "MINUS"})
}

$add.addEventListener("click", handleAdd)
$minus.addEventListener("click", handleMinus)