import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="top">
        <div className="left ">
          <div className="about-text"></div>
        </div>
        <div className="right">
          <div className="education-text"></div>
        </div>
      </div>

      <div className="bottom">
        <div className="skills">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-list">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">React.js</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">CSS</span>
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">Tailwind CSS</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Github</span>

            
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
