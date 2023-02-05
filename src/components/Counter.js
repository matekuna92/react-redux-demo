import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { INCREMENT } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  // get access to date managed by the store with this function
  // react-redux automatically set up a subscription to the redux store for this component, no manual need
  const counter = useSelector(state => state.counter);    // store the store's counter in a variable
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
      dispatch({ type: INCREMENT });
  }
    
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
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
