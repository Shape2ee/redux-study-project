import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice, { add } from '../module/counterSlice';


const counter = () => {
  const count = useSelector((state) => state.counter.number)
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        // dispatch({ type: 'counterSlice/add', step: 2 })
        dispatch(add(2))
      }}>+</button>
    </div>
  );
};

export default counter;