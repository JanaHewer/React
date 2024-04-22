import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
const[like, setLike] = useState(0);
const[dislike, setDislike] = useState(0);

const addLike = ()=> {
    setLike((prevValue) => prevValue +1);
};

const resetResults = ()=> {
    setLike(0);
   setDislike(0);
};

const addDisliike = ()=> {
    setDislike((prevValue) => prevValue +1);
};
  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <Button name="Like" onButtonclick={addLike} />
          <div className="result">{like}</div>
        </div>
        <div className="like-dislike-container">
          <Button name="Dislike" onButtonclick={addDisliike} />
          <div className="result">{dislike}</div>
        </div>
      </div>
      <Button name="Reset Results" onButtonclick={resetResults} />
    </div>
  );
}

export default Feedback;
