import React, { useState } from "react";
import "./MainPage.css";
import { questions } from "../../Questions";

export const MainPage = ({
  onCategoryChange,
  onDifficultyChange,
  onStartQuiz,
  currentCategory,
  selectedDifficulty,
}) => {

  const [difficulties, setDifficulties] = useState([]);

  const getPlaceholderOption = () => {
    return <option value="">-Please select a difficulty-</option>;
  };

  const onCategorySelectHandle = (category) => {
    onCategoryChange(category);

      const selectedCategory = questions[category];
      const difficultyLevels = Object.keys(selectedCategory);
      setDifficulties(difficultyLevels);


  };
  
  return (
    <>
      <div className="app">
        <div id="text1">Welcome to the quiz game!</div>
        <div className="game-setup">
          <div>
            <label htmlFor="category">Choose a category:</label>
            <select
              onChange={(e) => onCategorySelectHandle(e.target.value)}
              id="category"
              value={currentCategory || ""}
            >
              <option value="">-Please select a category-</option>
              <option value="Animals">Animals</option>
              <option value="History">History</option>
              <option value="Food">Food</option>
              <option value="Sport">Sport</option>
            </select>
          </div>
          <div>
            <label htmlFor="difficulty">Select difficulty:</label>
            <select
            id="difficulty"
            onChange={(e) => onDifficultyChange(e.target.value)}
            value={selectedDifficulty || ""}
          >
            {getPlaceholderOption()}
            {difficulties.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
            
          </div>
          <button className="start-btn" onClick={onStartQuiz}>
            Start game
          </button>
        </div>
      </div>
    </>
  );
};

