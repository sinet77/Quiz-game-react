import "./MainPage.css";
import { questions } from "../../Questions";

export const MainPage = ({
  onCategoryChange,
  onDifficultyChange,
  onStartQuiz,
  currentCategory,
}) => {
  const getPlaceholderOption = () => {
    return <option value="">-Please select a difficulty-</option>;
  };

  const onCategorySelectHandle = () => {
    const category = onCategoryChange;
    const selectedCategory = questions[category];
    // const difficulties = selectedCategory[onDifficultyChange];

    Object.keys(selectedCategory).forEach(([level]) => {
      return <option key={level} value={level}>
    </option>

  })
  };


  

  return (
    <>
      <div className="app">
        <div id="text1">Welcome to the quiz game!</div>
        <div className="game-setup">
          <div>
            <label htmlFor="category">Choose a category:</label>
            <select
              onChange={(e) => onCategoryChange(e.target.value)}
              id="category"
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
            >
            {getPlaceholderOption()}
            {onCategorySelectHandle()}
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
