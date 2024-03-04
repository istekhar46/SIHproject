import Child from './components/Child'
import { useState } from 'react'


const Parent = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1)
    }
    const handleDecrement = () => {
      setCount(count - 1)
    }
  
  return (
    <>
   
    <Child count={count} handleDecrement= {handleDecrement} handleIncrement={handleIncrement}/>
    
    </>
  )
}

export default Parent