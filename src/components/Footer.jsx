import "./Footer.css";
import React from "react";
import Wave from "react-wavify";

function Footer() {
  return (
    <footer className="footer">
      <div className="waveContainer">
        <Wave
          className="wave"
          fill="rgb(118, 156, 227)"
          paused={false}
          options={{
            height: 60,
            amplitude: 20,
            speed: 0.2,
            points: 4,
          }}
        />
        <Wave
          className="wave"
          fill="#b0c4eb"
          paused={false}
          options={{
            height: 90,
            amplitude: 25,
            speed: 0.3,
            points: 5,
          }}
        />
        <Wave
          className="wave"
          fill="#172554"
          paused={false}
          options={{
            height: 120,
            amplitude: 30,
            speed: 0.13,
            points: 6,
          }}
        />
        <div className="footerContent">
          <p>© {new Date().getFullYear()} Nishtha Pant</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
