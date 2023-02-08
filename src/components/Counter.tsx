import {useState} from 'react';
import classes from "./Counter.module.scss"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div onClick={() => setCounter(counter + 1)} className={classes.div}>
      {counter}
    </div>
  )
}

export default Counter