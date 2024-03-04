import React from "react"

const Child = ({count, handleDecrement, handleIncrement}) => {
  
    
    return (
      <>
      <p>{count}</p>
      <Button onClick={handleIncrement} variant="contained" color="primary">+</Button>
      <Button onClick={handleDecrement} variant="contained" color="primary">-</Button>
      </>
    )
  }
  
  export default Child