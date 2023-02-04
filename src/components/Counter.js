import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // get access to date managed by the store with this function
  // react-redux automatically set up a subscription to the redux store for this component, no manual need
  const counter = useSelector(state => state.counter);    // store the store's counter in a variable

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }
    
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
