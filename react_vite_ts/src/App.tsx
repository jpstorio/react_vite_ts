import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>Vite + React + TypeScript</p>
      </header>
    </div>
  );
}

export default App;
