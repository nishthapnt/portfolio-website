import "./Design.css"

function Design() {
  return (
    <section id="design" className="design-section">
      <div className="design-container">
        <h2 className="section-title">Design Projects</h2>
        <div className="design-gallery">
          <div className="design-item">
            <div className="design-image">
              <img src="/ui-design-mockup.png" alt="Design 1" />
            </div>
            <h3>Landing Page Design</h3>
            <p>Modern SaaS landing page with clean typography and engaging call-to-action elements.</p>
          </div>

          <div className="design-item">
            <div className="design-image">
              <img src="/mobile-app-interface.png" alt="Design 2" />
            </div>
            <h3>Mobile App Interface</h3>
            <p>User-friendly mobile app design focused on intuitive navigation and accessibility.</p>
          </div>

          <div className="design-item">
            <div className="design-image">
              <img src="/dashboard-ui-design.jpg" alt="Design 3" />
            </div>
            <h3>Dashboard Interface</h3>
            <p>Comprehensive dashboard design for data visualization and user management.</p>
          </div>

          <div className="design-item">
            <div className="design-image">
              <img src="/brand-identity-concept.png" alt="Design 4" />
            </div>
            <h3>Brand Identity</h3>
            <p>Complete branding system including logo, color palette, and typography guidelines.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design
