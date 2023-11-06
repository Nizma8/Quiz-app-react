import React, { useState } from "react";
import questions from "../question";
import Card from "react-bootstrap/Card";
import { Alert, Button, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

function Quiz({ username }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, SetAnswer] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [selectedAnswer, SetSelecteAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    Correct: 0,
    Wrong: 0,
  });
  const { totalQuestions, questionData, totalScore } = questions;
  const CorrectAnswer = questionData.map((items) => items.correctAnswer)[
    [activeQuestion]
  ];
  const progress = Math.round((activeQuestion / totalQuestions) * 100);

  const now = progress;
  const score = Math.round((result.score / totalScore) * 100);
  const onSelectedAnswer = (selectedAnswer) => {
    if (selectedAnswer !== "") {
      if (selectedAnswer === CorrectAnswer) {
        SetAnswer(true);
      } else {
        SetAnswer(false);
      }
      SetSelecteAnswer(selectedAnswer);
    } else {
      SetAnswer(false);
    }
  };

  const OnselectNext = () => {
    if (answer !== "") {
      if (activeQuestion === totalQuestions - 1) {
        setShowCard(true);
      }
      setActiveQuestion((prev) => prev + 1);
      SetAnswer("");
      SetSelecteAnswer("");
      setResult((prev) =>
        answer
          ? {
              ...prev,
              score: prev.score + 5,
              Correct: prev.Correct + 1,
            }
          : { ...prev, score: prev.score - 1, Wrong: prev.Wrong + 1 }
      );
    } else {
      alert("please select an answer");
    }
  };

  const reset = () => {
    setActiveQuestion(0);
    SetAnswer("");
    setResult({ score: 0, Correct: 0, Wrong: 0 });
    setShowCard(false);
    SetSelecteAnswer("");
  };

  return (
    <div className="container shadow-lg">
      {questionData &&
            activeQuestion >= 0 &&
            activeQuestion < questionData.length?
        (<div className="row">
        <div className="col-md-12 mx-auto">
          <ProgressBar now={now} variant="black" />
          <Card className="mb-4">
            <Card.Body className="bg-info  ">
              <Card.Title className="text-white" >
                Question {activeQuestion + 1} / {totalQuestions}
              </Card.Title>
              <p className="text-white qu">{questionData[activeQuestion].question}</p>
            </Card.Body>
          </Card>
          <ul className="list-group">
            {questionData[activeQuestion].options.map((item, index) => (
              <li
                className={`list-group-item  text-black  border rounded mb-2 ${
                  item === selectedAnswer
                    ? item === CorrectAnswer
                      ? "bg-success"
                      : "bg-danger"
                    : "bg-light"
                }`}
                key={index}
                onClick={() => onSelectedAnswer(item)}
              >
                {item}
              </li>
            ))}
          </ul>
         <Col  >
            <Button
              className="mt-3 w-25 mb-3 rounded " style={{marginLeft:"22rem"}}
              onClick={OnselectNext}
              variant="info"
              disabled={answer === ""}
            >
              {activeQuestion === totalQuestions - 1 ? "Finish" : "Next"}
            </Button>
         </Col>
        </div>
      </div>): <div className="row mt-4">
          <div className="col-md-8 mx-auto">
            <Card>
              <Card.Body className="text-center ">
                <Card.Text>Your Score: {score}%</Card.Text>
                <Card.Text>Correct Answers: {result.Correct}</Card.Text>
                <Card.Text>Wrong Answers: {result.Wrong}</Card.Text>
                <Alert variant={score >= 70 ? "success" : "danger"}>
                  {score >= 70
                    ? "Congratulations! You passed the quiz."
                    : "You did not pass the quiz."}
                </Alert>
                <Button onClick={reset} variant="info" className="mt-3">
                  Reset
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>}
      
    </div>
  );
}

export default Quiz;
