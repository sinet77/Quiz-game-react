import { useState } from "react";
import "./App.css";
import { MainPage } from "./components/MainPage/MainPage";
import { Questions } from "./components/Questions/Questions";
import { PointsPage } from "./components/PointsPage/PointsPage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentPage, setCurrentPage] = useState("main");
  const [points, setPoints] = useState(0);

  const onPointsChange = (points) => {
    setPoints(points + 1);
  };

  const handleSelectedCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleSelectedDifficultyChange = (newDifficulty) => {
    setSelectedDifficulty(newDifficulty);
  };

  const goToMenu = () => {
    setCurrentPage("main");
    setSelectedCategory("");
    setCurrentQuestion(null);
    setPoints(0);
  };
  const goToPointsPage = () => {
    setCurrentPage("points");
  };

  const goToNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  // const goToPreviousQuestion = () => {
  //   if (currentQuestion != 0) {
  //     setCurrentQuestion(currentQuestion - 1);
  //   }
  // };

  console.log("selectedCategory", selectedCategory);
  console.log("selectedDifficulty", selectedDifficulty);

  const onStartQuiz = () => {
    if (selectedDifficulty === "" || selectedCategory === "") {
      alert("Please select options below");
    } else {
      setCurrentQuestion(0);
      setCurrentPage("questions");
    }
  };

  console.log("currentQuestion", currentQuestion);

  const displayScreen = () => {
    switch (currentPage) {
      case "main": {
        return (
          <MainPage
            onCategoryChange={handleSelectedCategoryChange}
            onDifficultyChange={handleSelectedDifficultyChange}
            currentCategory={selectedCategory}
            selectedDifficulty={selectedDifficulty}
            onStartQuiz={onStartQuiz}
          />
        );
      }

      case "questions": {
        return (
          <Questions
            currentQuestion={currentQuestion}
            category={selectedCategory}
            difficulty={selectedDifficulty}
            goToNextQuestion={goToNextQuestion}
            goToPointsPage={goToPointsPage}
            points={points}
            setPoints={onPointsChange}
          />
        );
      }

      case "points": {
        return <PointsPage goToMenu={goToMenu} points={points} />;
      }

      default: {
        return (
          <MainPage
            onCategoryChange={handleSelectedCategoryChange}
            onDifficultyChange={handleSelectedDifficultyChange}
            currentCategory={selectedCategory}
            selectedDifficulty={selectedDifficulty}
            onStartQuiz={onStartQuiz}
          />
        );
      }
    }
  };

  return <div className="App">{displayScreen()}</div>;
}

export default App;
