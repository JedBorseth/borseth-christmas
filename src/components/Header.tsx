import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-center">
      <nav>
        <ul className="flex h-16 items-center gap-10 ">
          <li>
            <Link to="../" className="transition-colors hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="../draw-names"
              className="transition-colors hover:text-red-400"
            >
              Draw Names
            </Link>
          </li>
          <li>
            <a
              href="../list"
              className="transition-colors hover:text-green-400"
            >
              View Lists
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
