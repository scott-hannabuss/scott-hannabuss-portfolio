import "./App.css";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects.js";
import ContactDetails from "./components/ContactDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <ContactDetails />
    </div>
  );
}

export default App;
