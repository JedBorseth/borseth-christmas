import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-16 w-full justify-center bg-inherit text-center">
      <p>
        <span className="px-1 transition-colors hover:text-red-400">
          Copyright 2022 &copy;
        </span>
        |
        <span className="px-1 transition-colors hover:text-green-400">
          Jed Borseth
        </span>
        |
        <span className="px-1 transition-colors hover:text-red-400">
          All Rights Reserved
        </span>
      </p>
    </footer>
  );
};

export default Footer;
