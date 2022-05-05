import Question from "./Question";
import data from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h3>Accordion Demo</h3>
      <section className="info">
        {questions.map((item) => {
          return <Question key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
}

export default App;
