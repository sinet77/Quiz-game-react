import { MainPage } from "../MainPage/MainPage";
import { questions } from "/src/Questions.js";
import { useState } from "react";
import { PointsPage } from "../PointsPage/PointsPage";

export const Questions = ({
  currentQuestion,
  category,
  difficulty,
  goToNextQuestion,
}) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(undefined);
  const [userAnswer, setUserAnswer] = useState([]);
  const [counter, setCounter] = useState(0);

  // Pobierz questiosn z Questions.js i wyświetl pytanie o danym indeksie

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
      goToNextQuestion();
      setUserAnswer([]);
      if (counter < questionsInCategory.length - 1) {
        setCounter(counter + 1);
      } else {
        alert(
          "You have reached the end of the quiz. There are no more questions."
        );
        <PointsPage />;
      }
    }
  };

  const goToMenu = () => {
    <MainPage />;
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
    const newAnwser = [...allAnswers];
    newAnwser[index].userSelect = true;

    setUserAnswer(newAnwser);
  };

  const getColorButton = () => {};

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
        {counter >= questionsInCategory.length ? (
          <button
            className="menu"
            onClick={() => {
              goToMenu();
            }}
          >
            Menu
          </button>
        ) : (
          <button
            className="next-btn"
            onClick={() => {
              canIGoToNextQuestion();
              goToNextQuestion();
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
