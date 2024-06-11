import { useState } from "react";
import "./App.css";
import { MainPage } from "./components/MainPage/MainPage";
import { Questions } from "./components/Questions/Questions";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState();

  const handleSelectedCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleSelectedDifficultyChange = (newDifficulty) => {
    setSelectedDifficulty(newDifficulty);
  };

  const handleCurrentQuestion = (question) => {
    setCurrentQuestion(question)
  }

  const goToNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  console.log("selectedCategory", selectedCategory);
  console.log("selectedDifficulty", selectedDifficulty);

  const onStartQuiz = () => {
    if (selectedDifficulty === "" || selectedCategory === "") {
      alert("Please select options below");
    } else {
      setCurrentQuestion(1);
    }
  };

  console.log("currentQuestion",currentQuestion);

  return (
    <div className="App">
      {!currentQuestion && (
        <MainPage
          onCategoryChange={handleSelectedCategoryChange}
          onDifficultyChange={handleSelectedDifficultyChange}
          currentCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          onStartQuiz={onStartQuiz}
        />
      )}

      {selectedCategory !== undefined &&
        selectedDifficulty !== undefined &&
        currentQuestion && <Questions goToNextQuestion={goToNextQuestion} 
        category={handleSelectedCategoryChange} 
        difficulty={handleSelectedDifficultyChange} 
        currentQuestion={handleCurrentQuestion}/>}
    </div>
  );
}

export default App;
