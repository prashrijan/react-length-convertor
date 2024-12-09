import { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";

function App() {
  const [fromLength, setFromLength] = useState("Foot");
  const [toLength, setToLength] = useState("Foot");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const convertLength = (from, to, inputVal) => {
    let map = {
      Centimeter: 1,
      Meter: 100,
      Foot: 30.48,
      Inches: 2.54,
    };

    if (map.hasOwnProperty(from) && map.hasOwnProperty(to)) {
      let valInCm = inputVal * map[from];

      console.log(valInCm);
      return valInCm / map[to];
    }

    return inputVal;
  };

  const handleLengthCalculation = (e) => {
    const { value } = e.target;
    setInputValue(value);
    let outputValue = convertLength(fromLength, toLength, value);
    setResult(outputValue);
  };

  return (
    <div className="flex flex-col gap-8 h-screen bg-slate-200 items-center justify-center">
      <h2 className="text-3xl font-bold">Length Convertor</h2>

      <div className="flex flex-col w-1/4 gap-2">
        <InputField
          label="From"
          value={inputValue}
          changeDropDownValue={setFromLength}
          onchange={handleLengthCalculation}
          dropDownValue={fromLength}
        />
        <InputField
          label="To"
          value={result}
          disable="true"
          changeDropDownValue={setToLength}
          dropDownValue={toLength}
        />
      </div>

      <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Reset
      </button>
    </div>
  );
}

export default App;
