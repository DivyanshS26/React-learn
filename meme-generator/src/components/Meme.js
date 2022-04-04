import React, { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  
  const [allMeme, setAllMeme] = useState([]);

  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */


  useEffect(() => {

    // async function getMeme(){
    //   fetch("https://api.imgflip.com/get_memes")
    //   const data = await res.json()
    //   setAllMeme(data.data.memes)
    // }
    // getMeme()

    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(elements => setAllMeme(elements.data.memes))
  }, [])

  function handleClick(e){
    const {name, value} = e.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }))
  }
  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    // const url = memesArray[randomNumber].url;
    // // console.log(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url);
    const url = allMeme[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input 
            type="text" 
            className="form-input" 
            placeholder="top text" 
            name="topText"
            value={meme.topText}
            onChange={handleClick}
        />
        <input 
            type="text" 
            className="form-input" 
            placeholder="bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleClick}
        />
        <button onClick={getImage} className="form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
