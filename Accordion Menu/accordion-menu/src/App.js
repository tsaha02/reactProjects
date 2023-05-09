import data from "./data";
import "./App.css";
import React, { useState } from "react";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <div className="App">
      <h1 style={{ color: "tomato", fontSize: "xx-large" }}>
        <u>Accordion Menu</u>
      </h1>
      {questions.map((item) => {
        return <Questions key={item.id} {...item} />;
      })}
    </div>
  );
}

export default App;
