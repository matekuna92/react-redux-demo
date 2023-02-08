import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  // get access to date managed by the store with this function
  // react-redux automatically set up a subscription to the redux store for this component, no manual need
  const counter = useSelector(state => state.counter);    // store the store's counter in a variable
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
      dispatch(counterActions.increment());
  }
    
  const increaseHandler = () => {
      dispatch(counterActions.increase({ payload: 10 }));   // redux toolkit payload name is built-n, custom name cant be used
  }

  const decrementHandler = () => {
      dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
