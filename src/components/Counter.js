import classes from './Counter.module.css';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import { counterActions } from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const toggle = useSelector(state=>state.counter.toggle)

  const incrementHandler = ()=>{
    dispatch(counterActions.increment())
  }

  const increaseHandler = ()=>{
    dispatch(counterActions.increase(10))
  }

  const decrementHandler  = ()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>
          increment
        </button>
        <button onClick={increaseHandler}>IncreaseBy 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
