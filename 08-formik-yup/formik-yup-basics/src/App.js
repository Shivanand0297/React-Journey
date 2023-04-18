import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import "./App.css";
import FormikComponentForm from "./components/FormikComponentForm";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>
        <h3
          onClick={() => setView("component")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Component
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : view === "component" ? <FormikComponentForm/> : <AdvancedForm/>}
    </div>
  );
}

export default App;
