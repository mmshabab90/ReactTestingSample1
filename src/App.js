import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

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
            style={{ backgroundColor: checked ? "gray" : btnColor }}
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
          id="disable-btn-checkbox"
          defaultChecked={checked}
          aria-checked={checked}
          onClick={() => setChecked(!checked)}
        />
        <label htmlFor="disable-btn-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
