import "./MainPage.css";
import { questions } from "../Questions/Questions";

export const MainPage = () => {
  const getPlaceholderOption = () => {
    return <option value="">-Please select a difficulty-</option>;
  };

  const onCategorySelectHandle = (e) => {
    const category = e.target.value;
    const selectedCategory = questions[category];
  };

  const displayQuestions = () => {};
  return (
    <>
      <div className="app">
        <div id="text1">Welcome to the quiz game!</div>
        <div className="game-setup">
          <div>
            <label htmlFor="category">Choose a category:</label>
            <select id="category">
              <option value="">-Please select a category-</option>
              <option value="Animals">Animals</option>
              <option value="History">History</option>
              <option value="Food">Food</option>
              <option value="Sport">Sport</option>
            </select>
          </div>
          <div>
            <label htmlFor="difficulty">Select difficulty:</label>
            <select id="difficulty">
              <option value="">-Please select a difficulty-</option>
            </select>
          </div>
          <button className="start-btn" onClick={displayQuestions}>
            Start game
          </button>
        </div>
      </div>
    </>
  );
};
