import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Freshener from "./components/Freshener";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import Sanitizer from "./components/Sanitizer";
import Soap from "./components/Soap";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Soap />
      <Freshener />
      <Sanitizer />
      <Reviews />
      <About />
      <Footer />
    </div>
  );
}

export default App;
