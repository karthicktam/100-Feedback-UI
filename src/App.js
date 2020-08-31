// Design by Ildiesign - https://dribbble.com/shots/7292664-Survey-UI-Design -->
// Icons by - https://www.flaticon.com/authors/roundicons -->
import React, { useState } from "react";
import "./styles.css";

function IconContainer(props) {
  const { status, styleHandler, image, text } = props;

  return (
    <div
      className={status === true ? "rating active" : "rating"}
      onClick={() => styleHandler(text)}
    >
      <img className="img" src={image} alt={text} />
      <small>{text}</small>
    </div>
  );
}

// https://image.flaticon.com/icons/svg/535/535183.svg
export default function App() {
  const [showReview, setShowReview] = useState(false);
  const [unsatisfiedStatus, setUnsatisfied] = useState(false);
  const [neutralStatus, setNeutral] = useState(false);
  const [satisfiedStatus, setStatisfied] = useState(true);

  const clickHandler = () => {
    setShowReview(true);
  };

  const styleHandler = (val) => {
    if (val === "Unsatisfied") {
      setUnsatisfied(true);
      setNeutral(false);
      setStatisfied(false);
    } else if (val === "Neutral") {
      setUnsatisfied(false);
      setNeutral(true);
      setStatisfied(false);
    } else if (val === "Satisfied") {
      setUnsatisfied(false);
      setNeutral(false);
      setStatisfied(true);
    }
  };

  return (
    <div className="panel-container">
      {!showReview ? (
        <div>
          <strong>
            How statisfied are you with our
            <br /> customer support performance?
          </strong>
          <div className="ratings-container">
            <IconContainer
              status={unsatisfiedStatus}
              image="https://image.flaticon.com/icons/svg/187/187150.svg"
              text="Unsatisfied"
              styleHandler={styleHandler}
            />
            <IconContainer
              status={neutralStatus}
              image="https://image.flaticon.com/icons/svg/187/187136.svg"
              text="Neutral"
              styleHandler={styleHandler}
            />
            <IconContainer
              status={satisfiedStatus}
              image="https://image.flaticon.com/icons/svg/187/187133.svg"
              text="Satisfied"
              styleHandler={styleHandler}
            />
          </div>
          <button className="btn" onClick={clickHandler}>
            Send review
          </button>
        </div>
      ) : (
        <div className="iconDiv">
          <img
            className="iconImg"
            src="https://image.flaticon.com/icons/svg/535/535183.svg"
            alt="Heart"
          />
          <strong>Thank You, Karthick!</strong>
          <p>
            We'll user your feedback to improve our customer support
            performance.
          </p>
          <button className="btn">Done</button>
        </div>
      )}
    </div>
  );
}
