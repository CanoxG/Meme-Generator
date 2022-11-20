import React, {useEffect, useState} from "react";
import "./Main.css";

function Meme() {
  // Create memeImg state
  const [memes, setMemes] = useState('');
  const [count, setCount] = useState(0)
  const [text, setText] = useState({
    topText: "",
    bottomText: "",
  });

  console.log(memes)

  // When the function is called
  // Update the memesImg state with a random number
  // function getClicked() {
  //   const memesArray = MemesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   const url = memesArray[randomNumber].url;
  //   setImg(url)
  //   console.log(url)
  // }

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes[count].url))
  }, [count])

  const getMemes = () => {
    setCount((prevState) => prevState + 1)
  }

  const textChange = (e) => {
    const { name, value } = e.target;
    setText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Top Text"
          className="formInput"
          name="topText"
          value={text.topText}
          onChange={textChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="formInput"
          name="bottomText"
          value={text.bottomText}
          onChange={textChange}
        />
      </form>
      <br />
      <button onClick={getMemes} className="form--button">
        Get a new meme image
      </button>
      <br />
      <div className='meme'>
        {memes && <img src={memes} className="meme-image" alt="img" />}
        <h6 className='memeText top'>{text.topText}</h6>
        <h6 className='memeText bottom'>{text.bottomText}</h6>
      </div>
    </>
  );
}

export default Meme;
