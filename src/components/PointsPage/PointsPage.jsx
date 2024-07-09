import "/src/components/MainPage/MainPage.css";

export const PointsPage = ({ goToMenu, points }) => {
  return (
    <div className="app">
      <div id="text1">Let's count your points!</div>
      <div className="game-setup">
        <div>You have earned {points} points. Congratulations!</div>
        <button className="menu" onClick={goToMenu}>
          Menu
        </button>
      </div>
    </div>
  );
};
