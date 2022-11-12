import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen w-full bg-neutral font-light text-white">
      <Header />
      <main className="grid min-h-screen grid-rows-3 items-center bg-inherit">
        <h1 className="text-center text-4xl font-normal">
          Borseth Family Christmas
        </h1>
        <h2 className="text-center text-xl italic">
          <span className="text-red-400">Jonah</span>,{" "}
          <span className="text-green-400">Josh</span>,{" "}
          <span className="text-red-400">Josh</span>,{" "}
          <span className="text-green-400">Jed</span>,{" "}
          <span className="text-red-400">Jeremiah</span>
        </h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
