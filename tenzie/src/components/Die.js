import React from 'react'

const Die = (props) => {
  const styles ={
    backgroundColor: props.isHeld ? '#59E391' : 'white'
  }
  return (
    <div 
      style={styles} 
      onClick={() => props.holdDice(props.id)} //if we have used the other way the directly pass 
      // onClick={props.holdDice}
      className='die' 
    >
      <h2>{props.value}</h2>  
    </div>
  )
}

export default Die