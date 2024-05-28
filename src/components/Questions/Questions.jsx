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

  const goToNextQuestion = () => {
    // sprawdzac czy uzytkownik
    if (isCorrectAnswer) {
      // setCurrentQuestion ++
      goToNextQuestion();
    }
  };

  const checkAnswer = (isCorrectAnswer) => {
    setIsCorrectAnswer(isCorrectAnswer);
  };

  const singleQuestion = questionsInCategory[currentQuestion];

  return (
    <>
      <div>{singleQuestion.question}</div>
      <div>
        {singleQuestion.answers.map((a) => {
          <button onClick={() => checkAnswer(a.correct)}>{a.text}</button>;
        })}
      </div>
      <button onClick={goToNextQuestion}>Next</button>
    </>
  );
};
