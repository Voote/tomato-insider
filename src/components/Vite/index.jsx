import React from "react";
import { useState } from "react";

const ViteButton = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default ViteButton;
