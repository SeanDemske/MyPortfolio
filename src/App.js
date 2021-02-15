import Splashscreen from "./Components/Splashscreen/Splashscreen";
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="Splashscreen">
        <Splashscreen />
      </section>
      <section id="Content">
        <h1>Content 1</h1>
        <h1>Content 2</h1>
        <h1>Content 3</h1>
        <h1>Content 4</h1>
      </section>
    </div>
  );
}

export default App;
