import React, { useEffect, useState } from "react";
console.log("Component Rendered");

function Api() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);

  // Side Effect
  useEffect(() => {
    if (!count) return;
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <>
      <h2>The Character is {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Get Next Character
      </button>
      <br/>
      {/* Conditional Rendering */ }
      {count > 0 ? <pre>{JSON.stringify(starWarsData, null, 2)}</pre> : 'Loading'}
    </>
  );
}

export default Api;
