import React from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { counterActions } from '../store/index'



const Counter = () => {
  const [newAmount, setNewAmount] = useState('');
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(+newAmount))
    setNewAmount((''))
  }

  const changeHandler = (event) => {
    setNewAmount((event.target.value))
  }

  return (
    <main className={classes.counter}>

      <div className={classes['number-buttons']}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      
      <input onChange={changeHandler} value={newAmount}/>
      <button onClick={decrementHandler}>-</button>
      <button onClick={increaseHandler}>amount</button>
      <button onClick={incrementHandler}>+</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

    </main>
  );
};

export default Counter;