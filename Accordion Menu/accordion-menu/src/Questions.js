import { useState } from "react";
let Questions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => setShowInfo(!showInfo)}>
        {!showInfo ? "Show Answer" : "Hide Answer"}
      </button>
      {showInfo && <p>{info}</p>}

      <hr />
    </div>
  );
};
export default Questions;
