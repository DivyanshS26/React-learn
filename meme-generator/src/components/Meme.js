import React, {useState} from 'react'
import memesData from '../memesData';

const Meme = () => {

  const [memeImage, setMemeImage] = useState("");

  function getImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url;
    // console.log(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url);
    setMemeImage(url);
  }

  return (
    <main >
        <div className='form'>
            <input type="text" className='form-input' placeholder='top text'/>
            <input type="text" className='form-input' placeholder='bottom text'/>
            <button onClick={getImage} className='form-button'>Get a new meme image  🖼</button>
        </div>
            <img src={memeImage} className="img" />
    </main>
  )
}

export default Meme