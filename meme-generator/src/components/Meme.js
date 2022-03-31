import React, {useState} from 'react'
import memesData from '../memesData';

const Meme = () => {

  const [meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImage, setAllMemeImage] = useState(memesData);

  function getImage() {
    const memesArray = allMemeImage.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // const url = memesArray[randomNumber].url;
    // // console.log(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url);
    const url = allMemeImage.data.memes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage:url
    }));
    // console.log(allMemeImage.data.memes[randomNumber].url);
  }

  return (
    <main >
        <div className='form'>
            <input type="text" className='form-input' placeholder='top text'/>
            <input type="text" className='form-input' placeholder='bottom text'/>
            <button onClick={getImage} className='form-button'>Get a new meme image  🖼</button>
        </div>
            <img src={meme.randomImage} className="img" />
    </main>
  )
}

export default Meme