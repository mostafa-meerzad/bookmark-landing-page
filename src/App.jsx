import AskQuestion from "./sections/AskQuestion";
import Download from "./sections/Download";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <>
      <header className="mx-auto max-w-screen-2xl">
        <Header />
      </header>
      <main className="mx-auto max-w-screen-2xl max-md:px-4 max-lg:px-[5%] px-[10%] overflow-hidden ">
        <Hero />
        <Features />
        <Download />
        <AskQuestion />
      </main>
      <footer className="mx-auto max-w-screen-2xl ">
        <Footer />
      </footer>
    </>
  );
};
export default App;
