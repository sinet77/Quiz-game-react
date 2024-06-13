import { questions } from "/src/Questions.js";
import { useState } from "react";

export const Questions = ({
  currentQuestion,
  category,
  difficulty,
  goToNextQuestion,
}) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

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
    if (isCorrectAnswer) {
      goToNextQuestion();
      setIsCorrectAnswer(false);
    }
  };

  const checkAnswer = (isCorrectAnswer) => {
    setIsCorrectAnswer(isCorrectAnswer);
  };

  const singleQuestion = questionsInCategory[currentQuestion];

  return (
    <div className="app">
      <div className="text-question">{singleQuestion.question}</div>
      <div>
        {singleQuestion.answers.map((a, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => checkAnswer(a.correct)}
            >
              {a.text}
            </button>
          );
        })}
      </div>
      <button
        className="next-btn"
        onClick={() => {
          canIGoToNextQuestion();
          goToNextQuestion();
        }}
      >
        Next
      </button>
    </div>
  );
};
