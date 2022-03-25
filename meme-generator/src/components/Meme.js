import React from 'react'
import memesData from '../memesData';

const Meme = () => {

  function getImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url;
    // console.log(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url);
    console.log(url);
  }

  return (
    <main >
        <div className='form'>
            <input type="text" className='form-input' placeholder='top text'/>
            <input type="text" className='form-input' placeholder='bottom text'/>
            <button onClick={getImage} className='form-button'>Get a new meme image  🖼</button>
        </div>
    </main>
  )
}

export default Meme