import "./App.css";
import profilePhoto from "./assets/profilephoto2.jpg";

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="profile-section">
          <h1 className="name-title">Augustine Pedrozo</h1>
          <p className="job-title">Software Developer & Military Veteran</p>
          <div className="status-badges">
            <span className="status-badge">Columbus, OH</span>
          </div>
        </div>

        <div className="biography-section">
          <h2 className="section-title">About Me</h2>
          <div className="profile-photo-container">
            <img 
              src={profilePhoto} 
              alt="Augustine Pedrozo" 
              className="profile-photo"
            />
          </div>
          <div className="biography-content">
            <p>
              Hello, my name is Augustine Pedrozo. I'm a full-stack software
              developer who builds reliable and scalable web applications. I
              work with both C#/.NET and Node.js on the backend, and React,
              HTML, CSS, and JavaScript on the frontend. I have strong experience with
              database design and management using Microsoft SQL Server and
              MySQL, including creating efficient table structures and ER
              diagrams. I'm comfortable developing RESTful web APIs and
              integrating them into modern web interfaces. I use tools like Git,
              Visual Studio, Visual Studio Code, and Cursor to streamline
              development and maintain clean, version-controlled projects. My
              goal is to create well-structured, performant applications that
              are intuitive for users and maintainable.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects via GitHub, or working on desktop computers. I believe in continuous learning and
              staying up-to-date with the latest trends in technology.
            </p>
            <p>
              I'm always excited to collaborate on interesting projects and
              connect with fellow developers. Feel free to reach out if you'd
              like to work together!
            </p>
          </div>
        </div>

        <div className="skills-section">
          <div className="skills-card">
            <h3 className="card-title">Technical Skills</h3>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">React</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Node.js</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
                      <div className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">C#</span>
                          <span className="skill-percentage">85%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">MySQL</span>
                          <span className="skill-percentage">50%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">Microsoft SQL</span>
                          <span className="skill-percentage">50%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
          </div>

          <div className="interests-card">
            <h3 className="card-title">Interests</h3>
            <div className="interests-list">
              <span className="interest-tag">Web Development</span>
              <span className="interest-tag">Machine Learning</span>
              <span className="interest-tag">UI/UX Design</span>
              <span className="interest-tag">Game Development</span>
              <span className="interest-tag">Object Oriented Programming</span>
              <span className="interest-tag">Automation</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-card">
            <h3 className="cta-title">Let's Connect!</h3>
            <p className="cta-description">
              I'm always interested in hearing about new opportunities and
              exciting projects. Let's create something amazing together!
            </p>
            <div className="contact-links">
              <a href="https://github.com/a-pedrozo" target="_blank" rel="noopener noreferrer" className="contact-link github-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/augustine-pedrozo" target="_blank" rel="noopener noreferrer" className="contact-link linkedin-link">
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link resume-link">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
