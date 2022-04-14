import React from 'react'

const Die = (props) => {
  const styles ={
    backgroundColor: props.isHeld ? '#59E391' : 'white'
  }
  let value = ""
  if(props.value === 1){
    value = "oneDot"
  }else if(props.value === 2){
    value = "twoDot"
  }else if(props.value === 3){
    value = "threeDot"
  }else if(props.value === 4){
    value = "fourDot"
  }else if(props.value === 5){
    value = "fiveDot"
  }else{
    value = "sixDot"
  }
  return (
    <>
      {props.value === 1 &&<div 
        style={styles} 
        onClick={() => props.holdDice(props.id)} //if we have used the other way the directly pass 
        // onClick={props.holdDice}
        className={`${value} die`} 
      >
        <span className='dot'></span>
      </div>}  
      {props.value === 2 &&<div 
        style={styles} 
        onClick={() => props.holdDice(props.id)} //if we have used the other way the directly pass 
        // onClick={props.holdDice}
        className={`${value} die`} 
      >
        <span className='dot'></span>
        <span className='dot'></span>
      </div>}  
      {props.value === 3 &&<div 
        style={styles} 
        onClick={() => props.holdDice(props.id)} //if we have used the other way the directly pass 
        // onClick={props.holdDice}
        className={`${value} die`} 
      >
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>}  
      {props.value === 4 &&<div 
        style={styles} 
        onClick={() => props.holdDice(props.id)} //if we have used the other way the directly pass 
        // onClick={props.holdDice}
        className={`${value} die`} 
      >
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>} 
      {props.value === 5 &&<div 
        style={styles} 
        onClick={() => props.holdDice(props.id)} //if we have used the other way the directly pass 
        // onClick={props.holdDice}
        className={`${value} die`} 
      >
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>}  
      {props.value === 6 &&<div 
        style={styles} 
        onClick={() => props.holdDice(props.id)} //if we have used the other way the directly pass 
        // onClick={props.holdDice}
        className={`${value} die`} 
      >
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>} 
    </> 
  )
}

export default Die