import { useState } from "react";
import "./App.css";
import TopHeader from "./components/headers/top";
import LandingPage from "./components/landingPage/landingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TopHeader />
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
