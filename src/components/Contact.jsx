import "./Contact.css"

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-subtitle">Let's create something beautiful together ✨</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
          </div>

          <div className="contact-links">
            <a href="mailto:nishtha@example.com" className="contact-link email">
              <span className="contact-icon">✉️</span>
              <div>
                <div className="link-title">Email</div>
                <div className="link-value">nishtha@example.com</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link linkedin"
            >
              <span className="contact-icon">🔗</span>
              <div>
                <div className="link-title">LinkedIn</div>
                <div className="link-value">View My Profile</div>
              </div>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link github"
            >
              <span className="contact-icon">💻</span>
              <div>
                <div className="link-title">GitHub</div>
                <div className="link-value">Check My Work</div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
