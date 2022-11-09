import React, { useState } from "react";
import "./Main.css";
import MemesData from "../helper/MemesData";

function Meme() {
  const [img, setImg] = useState("");
  // Create memeImg state

  // When the function is called
  // Update the memesImg state with a random number
  function getClicked() {
    const memesArray = MemesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setImg(url);
  }

  return (
    <>
      <button onClick={getClicked} className="form--button">
        Get a new meme image
      </button>
      <br />
      {img && <img src={img} className="meme-image" alt="img" />}
    </>
  );
}

export default Meme;
