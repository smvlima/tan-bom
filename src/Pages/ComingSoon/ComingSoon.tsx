import "./ComingSoon.css";

export const ComingSoon: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="highlight" />
      <div className="logo">
        <img
          src={"../../assets/logo.png"}
          alt="tan bom logo"
          width="166px"
          height="166px"
        />
      </div>

      <div className="content">
        <img
          src={"../../assets/chase_your_best_mood.png"}
          alt="chase your best mood"
          width="100%"
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
