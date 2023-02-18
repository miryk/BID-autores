import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand ms-4" to='/'>Home</Link>
    </div>
  );
};

export default Header;
