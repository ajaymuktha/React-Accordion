import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ title, info }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showDetails && <p>{info}</p>}
    </article>
  );
}
