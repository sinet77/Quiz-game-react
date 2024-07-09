import { questions } from "/src/Questions.js";
import { useState } from "react";

export const Questions = ({
  currentQuestion,
  category,
  difficulty,
  goToNextQuestion,
  goToPointsPage,
  points,
  setPoints,
}) => {
  const [userAnswer, setUserAnswer] = useState([]);

  const currentCategory = questions[category];

  /*
const currentCategory = {
    "Beginner explorer": questionsEasyAnimals,
    "Wildlife enthusiast": questionsMediumAnimals,
    "Animal kingdom master": questionsHardAnimals,
  },
*/

  const questionsInCategory = currentCategory[difficulty];

  /* 
const questionsInCategory = [{
    question: "Which animal is the biggest?",
    answers: [
      { text: "Cat", correct: false },
      { text: "Dog", correct: false },
      { text: "Elephant", correct: true },
      { text: "Lion", correct: false },
    ],
  }, {...}]

*/

  const canIGoToNextQuestion = () => {
    if (userAnswer.length) {
      setUserAnswer([]);
      if (currentQuestion < questionsInCategory.length - 1) {
        goToNextQuestion();
      } else {
        goToPointsPage();
      }
    }
  };

  /*
const questionsInCategory = [
  {
    question:
      "Which country won the most gold medals in the 2016 Summer Olympics?",
    answers: [
      { text: "United States", correct: true },
      { text: "China", correct: false },
      { text: "Russia", correct: false },
      { text: "Great Britain", correct: false },
    ],
  },
  {
    question:
      "Who holds the record for the most goals scored in FIFA World Cup history?",
    answers: [
      { text: "Lionel Messi", correct: false },
      { text: "Pele", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Miroslav Klose", correct: true },
    ],
  },
*/

  const singleQuestion = questionsInCategory[currentQuestion];

  /* 
    const singleQustion =  {
      question:
        "Which country won the most gold medals in the 2016 Summer Olympics?",
      answers: [
        { text: "United States", correct: true },
        { text: "China", correct: false, userSelect: true },
        { text: "Russia", correct: false },
        { text: "Great Britain", correct: false },
      ],
  },
  */

  const checkAnswer = (index, allAnswers) => {
    const newAnswer = [...allAnswers];
    newAnswer[index].userSelect = true;

    setUserAnswer(newAnswer);

    if (newAnswer[index].correct) {
      setPoints(points);
    }
  };

  return (
    <div className="app">
      <div className="text-question">{singleQuestion.question}</div>
      <div>
        {userAnswer.length == 0
          ? singleQuestion.answers.map((a, index) => {
              return (
                <button
                  className={`btn`}
                  key={index}
                  onClick={() => checkAnswer(index, singleQuestion.answers)}
                >
                  {a.text}
                </button>
              );
            })
          : userAnswer.map((usAnswer, index) => {
              return (
                <button
                  className={`btn ${
                    usAnswer.userSelect && usAnswer.correct ? "green" : ""
                  }
                  ${usAnswer.userSelect && !usAnswer.correct ? "red" : ""}
                  ${usAnswer.correct ? "green" : ""}
                  `}
                  key={index}
                >
                  {usAnswer.text}
                </button>
              );
            })}
      </div>
      <div>
        <button className="next-btn" onClick={canIGoToNextQuestion}>
          Next
        </button>
      </div>
    </div>
  );
};
