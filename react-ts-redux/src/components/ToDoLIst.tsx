import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ToDoList } from '@/types';
import ToDo from './ToDo';

const ToDoLIst: React.FC = memo(() => {
  // store.getState()와 같은 역할
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  const toDoList = useSelector((state: ToDoList) => state.toDoList)
  console.log(toDoList)

  return (
    <ul>
      {
        toDoList.map((li) => {
          return (
            <ToDo toDo={li} key={li.id} />
          )
        })
      }
    </ul>
  );
});

export default ToDoLIst;