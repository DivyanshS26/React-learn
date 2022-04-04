import React,{useState} from 'react'

const Box = (props) => {

  const styles = {
      backgroundColor: props.on ? "#222222" : "transparent"
  }

  return (
    <div style={styles} className='box' onClick={props.toggle}></div>
  )
}

export default Box