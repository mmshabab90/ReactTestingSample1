import { useState } from "react";
import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [checked, setChecked] = useState(false);
  const newBtnColor = btnColor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <div className="wrapper-grid">
        <div>
          <button
            className="button"
            style={{ backgroundColor: btnColor }}
            onClick={() => setBtnColor(newBtnColor)}
            disabled={checked ? true : false}
          >
            Change to {newBtnColor}
          </button>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          id="change-btn-state"
          defaultChecked={checked}
          aria-checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </div>
    </div>
  );
}

export default App;
