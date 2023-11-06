const questions = {
  totalQuestions: 5,
  totalScore: 25,

  questionData: [
    {
      question: "What does 'DOM' stand for?",
      correctAnswer: "Document Object Model",
      options: [
        "Document Object Method",
        "Digital Object Model",
        "Document Object Model",
        "Distributed Object Model",
      ],
    },

    {
      question: "What is the output of 1 + '1' in JavaScript?",
      correctAnswer: "11",
      options: ["2", "11", "10", "1"],
    },

    {
      question: "Which of the following methods is used to access HTML elements using Javascript",
      correctAnswer: "Both A & B",
      options: ["getElementById()", "getElementByClassName()", "Both A & B", "None"],
    },

    {
      question: "What is the 'NaN' value in JavaScript?",
      correctAnswer: "Not-a-Number",
      options: ["Not-a-Number", "Negative Number", "Null", "Number"],
    },

    {
      question:
        "Which JavaScript method is used to join elements of an array into a string?",
      correctAnswer: "join()",
      options: ["concat()", "join()", "splice()", "map()"],
    },
  ],
};

export default questions;
