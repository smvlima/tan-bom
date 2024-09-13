import "./ComingSoon.css";

export const ComingSoon: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="highlight" />
      <div className="top-banner">
        <div className="logo">
          <img
            src={"../../logo.svg"}
            alt="tan bom logo"
            height="100%"
            className="logo-image"
          />
        </div>
        <div className="cta-button">
          <a
            href="https://www.instagram.com/tanbom.pt"
            target="_blank"
            rel="noreferrer"
            aria-label="tan bom instagram"
          >
            <img
              typeof="svg"
              src={"../../assets/instagram.svg"}
              alt="instagram icon"
              width="50"
              height="50"
            />
          </a>
        </div>
      </div>
      <div className="content">
        <img
          src={"../../assets/chase_your_best_mood.svg"}
          alt="chase your best mood"
          width="100%"
          className="content-chase_best_mood"
        />
        <img
          src={"../../assets/coming_soon.svg"}
          alt="coming soon"
          width="100%"
          className="content-coming_soon"
        />
      </div>
    </div>
  );
};
