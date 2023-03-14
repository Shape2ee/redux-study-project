import React from 'react';
import { ToDoItem } from '../types';
import { dispatchDelete } from '../store';
import { useDispatch } from 'react-redux';

interface Props {
  toDo: ToDoItem
}

// const ToDo = ({ toDo }: {toDo: ToDoItem}) => {
  const ToDo: React.FC<Props> = ({ toDo }) => {
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

export default ToDo