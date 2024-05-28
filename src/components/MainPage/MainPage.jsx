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

  const onCategorySelectHandle = (e) => {
    const category = e.target.value;
    const selectedCategory = questions[category];
  };

  const displayQuestions = () => {};

  const diffuculites = questions[currentCategory];

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
              <option value="">-Please select a difficulty-</option>
              <option value="easy">Easy</option>
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
