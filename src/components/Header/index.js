import React from "react";
import logo from "../../assets/img/logo-skinner-fondo.png";

export default function Header() {
  return (
    <header className="App-header">
      <div className="Container">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/tonyjimena"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div class="custom-shape-divider-top-1600866841">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
    </header>
  );
}
