import React from 'react'

const Start = (props) => {
  return (
    <div className='start'>
        <h1>Quizzical</h1>
        <p>Ready for the quiz</p>
        <button onClick={props.startToggle} >Start Quiz</button>
    </div>
  )
}

export default Start