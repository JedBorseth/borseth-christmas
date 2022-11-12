import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const List = () => {
  return (
    <div className="h-screen w-full bg-neutral font-light text-white">
      <Header />
      <main className="grid min-h-screen grid-rows-3 items-center bg-inherit"></main>
      <Footer />
    </div>
  );
};

export default List;
