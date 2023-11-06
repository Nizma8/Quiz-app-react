import React, { useState } from "react";
import questions from "../question";
import Card from "react-bootstrap/Card";
import { Alert, Button, CardBody, CardTitle } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
function Quiz({username}) {
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
 console.log(username);
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
    <>
     {questionData &&
            activeQuestion >= 0 &&
            activeQuestion < questionData.length?
     
     <div className="w-50 d-flex flex-column  shadow-lg ">
        {/* heading */}
        {/* <Card className="w-100  py-3">
          <h3>
            {questionData &&
            activeQuestion >= 0 &&
            activeQuestion < questionData.length
              ? ""
              : "Results"}
          </h3>
        </Card> */}
        {/* progressive bar */}
        <ProgressBar now={now} variant="black" />
        {/* question */}
        <div className=" ">
          <p className="p-4 text-black shadow-sm bg-info qu">
            {" "}
           {questionData &&
            activeQuestion >= 0 &&
            activeQuestion < questionData.length
              ?`${activeQuestion+1}/ ${totalQuestions}`:""} {" "} { 
            questionData &&
            activeQuestion >= 0 &&
            activeQuestion < questionData.length
              ? (questionData[activeQuestion].question)
              : ""}
          </p>
          {/* list */}
          <ol className=" text-black pb-5 pt-2  w-100">
            {questionData &&
            activeQuestion >= 0 &&
            activeQuestion < questionData.length
              ? questionData[activeQuestion].options.map((item, index) => {
                  return (
                    <li
                      className={`border-bottom w-100 py-3 px-3 border-info ${
                        item == selectedAnswer
                          ? selectedAnswer == CorrectAnswer
                            ? "bg-success"
                            : "bg-danger"
                          : "bg-white"
                      }`}
                      key={index}
                      onClick={() => {
                        onSelectedAnswer(item);
                      }}
                    >
                     • {item}
                    </li>
                  );
                })
              : ""}
          </ol>
          {/* button */}
          
            <button
              onClick={OnselectNext}
              className="px-5 py-2  mb-3 bg-info shadow-lg  "
              style={{ marginLeft: "290px",border:"none" }}
            >
              {activeQuestion === totalQuestions - 1 ? "finish" : "NEXT"}
            </button>
          
        </div>
       
      </div> :<div className="w-50 d-flex  border rounded border-5 ">
          <Card style={{ width: "100%" }} className="shadow-lg p-3 bg-white">
            <Card.Body className="text-center" >
              <p className="text-black">Your Score: {score}%</p>
              
               
               <p className="text-black">   Correct Answers:{result.Correct}</p>
                
                <p className="text-black">WrongAnswers:{result.Wrong}</p>
              
              <Alert variant={score >= 70 ? "success" : "danger"}>
                {score >= 70
                  ? "Congratulations! You passed the quiz."
                  : "You did not pass the quiz."}
              </Alert>
            </Card.Body>
            <Button onClick={reset} className="w-25 ml-5 bg-info" style={{marginLeft:"270px"}}>Reset</Button>
          </Card>
        </div>
      
      }


    </>
  );
}

export default Quiz;
