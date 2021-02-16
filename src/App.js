import Splashscreen from "./Components/Splashscreen/Splashscreen";
import AboutMe from "./Components/Content/AboutMe/AboutMe";
import Projects from "./Components/Content/Projects/Projects"
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="Splashscreen">
        <Splashscreen />
      </section>
      <section id="Content">
        <AboutMe />
        <Projects />
      </section>
    </div>
  );
}

export default App;
