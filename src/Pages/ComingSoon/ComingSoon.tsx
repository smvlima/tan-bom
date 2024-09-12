import "./ComingSoon.css";

export const ComingSoon: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="highlight" />
      <div className="logo">
        <img src={"../../assets/logo.png"} alt="tan bom logo" height="100%" />
      </div>

      <div className="content">
        <img
          src={"../../assets/chase_your_best_mood.png"}
          alt="chase your best mood"
          width="100%"
          className="content-chase_best_mood"
        />
        <img
          src={"../../assets/coming_soon.png"}
          alt="coming soon"
          width="100%"
        />
      </div>
    </div>
  );
};
