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
                <h4>Network Eng Intern</h4>
                <h5>7star Telecom Private Limited</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            I work as a Network Engineering Intern, gaining hands-on experience with routers and basic network configuration. I assist in troubleshooting and learning core networking concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>SPCI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
             I work as a Front-End Developer at SPCI, building responsive and user-friendly interfaces using modern web technologies. I collaborate with my professor, Dr. Maqbool, to develop and improve real-world projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web & Mobile Developer</h4>
                <h5>Solutionave LLC Pvt Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              I work as a Web & Mobile Developer at Solutionave LLC Pvt Ltd, creating cross-platform applications using modern technologies. I collaborate with the development team to deliver high-quality software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
