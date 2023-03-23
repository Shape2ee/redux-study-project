import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice, { add, asyncUpfetch } from '../module/counterSlice';


const counter = () => {
  const count = useSelector((state) => state.counter.number)
  const status = useSelector((state) => state.counter.status)
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>{count} | {status}</h1>
      <button onClick={() => {
        // dispatch({ type: 'counterSlice/add', step: 2 })
        dispatch(add(2))
      }}>+</button>
      <button onClick={() => {
        dispatch(asyncUpfetch())
      }}>+ async</button>
    </div>
  );
};

export default counter;