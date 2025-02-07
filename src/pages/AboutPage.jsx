import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      {/* Add the about-page class here */}
      <div className="header-box">
        <h1>What is Help A Halfling about?</h1>
        <p>
          Help a Halfling is dedicated to helping Halflings achieve their
          long-held dreams and aspirations. These wee folk have big dreams but
          they need your help to make them come true!
        </p>
        <img
          src="/images/icon-divider.svg"
          alt="divider"
          className="icon-divider"
        />
      </div>
    </div>
  );
}

export default AboutPage;
