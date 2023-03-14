import { ToDoItem } from '../types';
import { dispatchDelete } from '../store';
import { useDispatch } from 'react-redux';
const ToDo = ({ toDo }:{ toDo: ToDoItem}) => {
  const dispatch = useDispatch()
  const handleClickDelete = (e: any): void => {
    const id = parseInt(e.target.parentNode.id)
    dispatch(dispatchDelete(id))
  }
  return (
    <li id={`${toDo.id}`}>
      {toDo.text}
      <button onClick={handleClickDelete}>Del</button>
    </li>
  );
};

export default ToDo;