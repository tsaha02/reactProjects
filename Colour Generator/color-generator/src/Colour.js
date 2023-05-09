import { useState } from "react";
let Color = () => {
  let [color, setColor] = useState("#000000");
  let colorGenerator = () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <button
        onClick={colorGenerator}
        style={{
          fontSize: "1.5rem",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          border: "none",
          backgroundColor: "whiteSmoke",
          cursor: "grab",
        }}
      >
        Generate Color
      </button>
    </div>
  );
};
export default Color;
