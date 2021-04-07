import "./App.css";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
