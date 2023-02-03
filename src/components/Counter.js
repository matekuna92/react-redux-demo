import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // get access to date managed by the store with this function
  // react-redux automatically set up a subscription to the redux store for this component, no manual need
  const counter = useSelector(state => state.counter);    // store the store's counter in a variable

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
