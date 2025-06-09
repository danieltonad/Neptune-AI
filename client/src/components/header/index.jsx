import React from "react";
import "./header.scss";

const Header = ({ title = "Neptune", isFixed }) => {
  return (
    <header className={`header ${isFixed ? "fixed" : ""}`}>
      <div className="header-container">
        <h1>
          {title}
          <span>AI</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
