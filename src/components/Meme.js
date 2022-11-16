import React, { useState } from "react";
import "./Main.css";
import MemesData from "../helper/MemesData";

function Meme() {
  const [img, setImg] = useState("");
  // Create memeImg state
  const [text, setText] = useState({
    topText: "",
    bottomText: "",
  });

  // When the function is called
  // Update the memesImg state with a random number
  function getClicked() {
    const memesArray = MemesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setImg(url);
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
      <button onClick={getClicked} className="form--button">
        Get a new meme image
      </button>
      <br />
      <div className='meme'>
        {img && <img src={img} className="meme-image" alt="img" />}
        <h6 className='memeText top'>{text.topText}</h6>
        <h6 className='memeText bottom'>{text.bottomText}</h6>
      </div>
    </>
  );
}

export default Meme;
