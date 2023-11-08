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
      category:"Javascript"
    },

    {
      question: "What is the output of 1 + '1' in JavaScript?",
      correctAnswer: "11",
      options: ["2", "11", "10", "1"],
      category:"Javascript"

    },

    {
      question: "Which of the following methods is used to access Html elements using Javascript",
      correctAnswer: "Both A & B",
      options: ["getElementById()", "getElementByClassName()", "Both A & B", "None"],
      category:"Javascript"

    },

    {
      question: "What is the 'NaN' value in JavaScript?",
      correctAnswer: "Not-a-Number",
      options: ["Not-a-Number", "Negative Number", "Null", "Number"],
      category:"Javascript"

    },

    {
      question:
        "Which JavaScript method is used to join elements of an array into a string?",
      correctAnswer: "join()",
      options: ["concat()", "join()", "splice()", "map()"],
      category:"Javascript"

    },

    {
      question: "What is React?",
      correctAnswer: "React is a JavaScript library for building user interfaces.",
      options: [
      "React is a programming language.",
      "React is a database management system.",
      "React is a JavaScript library for building user interfaces.",
      "React is a design tool.",
      ],
      category:"React"
      }
      ,
      {
      question: "What is JSX in React?",
      correctAnswer: "JSX is a syntax extension for JavaScript used in React to describe the structure of UI components.",
      options: [
      "JSX is a JavaScript runtime environment.",
      "JSX is a React component.",
      "JSX is a data storage format in React.",
      "JSX is a syntax extension for JavaScript used in React to describe the structure of UI components."
      ],      category:"React"

      }
      ,
      {
      question: "What is the virtual DOM in React?",
      correctAnswer: "The virtual DOM is a lightweight in-memory representation of the actual DOM and is used for optimizing rendering performance in React.",
      options: [
      "The virtual DOM is a component in React.",
      "The virtual DOM is an external library used with React.",
      "The virtual DOM is a lightweight in-memory representation of the actual DOM and is used for optimizing rendering performance in React.",
      "The virtual DOM is a database in React.",
      ],      category:"React"

      }
      ,
      {
      question: "What is a React component?",
      correctAnswer: "A React component is a reusable and self-contained building block for user interfaces.",
      options: [
      "A React component is a routing mechanism in React.",
      "A React component is a database management system.",
      "A React component is a text editor in React.",
      "A React component is a reusable and self-contained building block for user interfaces.",
      ],      category:"React"

      }
      ,
      {
      question: "What is the purpose of state in React components?",
      correctAnswer: "State is used to store and manage data that can change over time within a React component and trigger re-renders when updated.",
      options: [
      "State is used for defining the structure of a component in React.",
      "State is used for handling routing in React.",
      "State is used to store and manage data that can change over time within a React component and trigger re-renders when updated.",
      "State is used for managing external API calls in React.",
      ],      category:"React"

      },
      {
        question: "What does 'Html' stand for?",
        correctAnswer: "HyperText Markup Language",
        options: [
          "Hyperlink and Text Markup Language",
          "HyperText Makeup Language",
          "HyperText Markup Language",
          "Highly Technical Modern Language",
        ],
        category: "Html",
      },
      {
        question: "What Html tag is used to create an ordered list?",
        correctAnswer: "<ol>",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
        category: "Html",
      },
      {
        question: "Which Html tag is used for creating hyperlinks?",
        correctAnswer: "<a>",
        options: ["<link>", "<href>", "<hyperlink>", "<a>"],
        category: "Html",
      },
      {
        question: "What is the correct Html element for inserting a line break?",
        correctAnswer: "<br>",
        options: ["<break>", "<lb>", "<linebreak>", "<br>"],
        category: "Html",
      },
      {
        question: "Which Html tag is used to define an image in a webpage?",
        correctAnswer: "<img>",
        options: ["<picture>", "<image>", "<img>", "<photo>"],
        category: "Html",
      }
  ],
};

export default questions;
