import "./Code.css"

function Code() {
  return (
    <section id="code" className="code-section">
      <div className="code-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/web-project.jpg" alt="Project 1" />
            </div>
            <h3>E-Commerce Platform</h3>
            <p>A modern React-based e-commerce solution with real-time inventory management and payment integration.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/modern-data-dashboard.png" alt="Project 2" />
            </div>
            <h3>Analytics Dashboard</h3>
            <p>
              Interactive data visualization dashboard with real-time updates, charts, and detailed analytics reporting.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>D3.js</span>
              <span>REST API</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/mobile-app-showcase.png" alt="Project 3" />
            </div>
            <h3>Task Management App</h3>
            <p>
              Responsive task management application with drag-and-drop functionality and team collaboration features.
            </p>
            <div className="project-tags">
              <span>React Native</span>
              <span>Firebase</span>
              <span>Redux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Code
