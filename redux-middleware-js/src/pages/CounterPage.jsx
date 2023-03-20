import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../module/counter';

const CounterPage = () => {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIcrease = () => {
    dispatch(increaseAsync())
  }
  const onDecrease = () => {
    dispatch(decreaseAsync())
  }

  return (
    <Counter number={number} onIncrease={onIcrease} onDecrease={onDecrease} />
  );
};

export default CounterPage;