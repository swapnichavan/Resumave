import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="mx-auto flex max-w-screen-xl items-center px-3 py-2.5 2xl:max-w-screen-2xl">
      <Link to="/" className="mr-auto text-2xl">
        <span className="text-gradient">Resumave</span>
      </Link>
    </header>
  );
}

export default Header;
