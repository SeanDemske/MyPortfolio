import Splashscreen from "./Components/Splashscreen/Splashscreen";
import AboutMe from "./Components/Content/AboutMe/AboutMe";
import Projects from "./Components/Content/Projects/Projects"
import Links from "./Components/Content/Links/Links";
import Footer from "./Components/Footer/Footer";
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
        <Links />
      </section>
      <footer id="Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
