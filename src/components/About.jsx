import "./About.css"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-left">
            <div className="about-avatar-container">
              <img src="/avatar.svg" alt="Nishtha Pant" />
            </div>
          </div>

          <div className="about-right">
            <div className="about-text">
              <h3>Designer & Frontend Developer</h3>
              <p>
                I'm a creative developer passionate about crafting beautiful and functional web experiences. With 5+
                years of experience in UI/UX design and frontend development, I specialize in building responsive,
                user-centric digital solutions.
              </p>

              <div className="skills-section">
                <h4>Skills & Expertise</h4>
                <div className="skills-grid">
                  <div className="skill-item">
                    <span className="skill-icon">🎨</span>
                    <h5>UI/UX Design</h5>
                    <p>Figma, Adobe XD, Prototyping</p>
                  </div>

                  <div className="skill-item">
                    <span className="skill-icon">⚛️</span>
                    <h5>Frontend Dev</h5>
                    <p>React, Next.js, JavaScript</p>
                  </div>

                  <div className="skill-item">
                    <span className="skill-icon">🎯</span>
                    <h5>UX Research</h5>
                    <p>User Testing, Analytics</p>
                  </div>

                  <div className="skill-item">
                    <span className="skill-icon">📱</span>
                    <h5>Responsive Design</h5>
                    <p>Mobile-First Approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
