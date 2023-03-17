import { useState } from "react";
import "./App.css";
import LandingPage from "./components/landingPage/landingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Tomatoe Insider</h1>
      <h2>Created with Vite + React</h2>
      <LandingPage />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
