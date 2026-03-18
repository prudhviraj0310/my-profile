import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Commercial Market</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Delivered premium products like Oblong (Luxury Real Estate) and Meo-Digital-Media. Built enterprise-grade frontends using TypeScript to meet aesthetic and functional standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer</h4>
                <h5>Enterprise Utilities & AI</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Engineered Attendance-Optimizer using Flask for systemic optimization. Developed Jarvis-Learning-Server showcasing capability in Python-based backend architecture for AI logic.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>HexaInd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting and developing comprehensive web solutions. Tackling complex challenges across the stack, building functional infrastructure, and delivering robust full-stack products from concept to production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
