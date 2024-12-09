import { useRef, useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";

function App() {
  // const [fromLength, setFromLength] = useState("Meter");
  // const [toLength, setToLength] = useState("Centimeter");

  const fromRef = useRef("");
  const toRef = useRef("");

  const inputRef = useRef();
  const resultRef = useRef();

  const convertLength = (from, to, inputVal) => {
    let map = {
      Centimeter: 1,
      Meter: 100,
      Foot: 30.48,
      Inches: 2.54,
    };

    if (map.hasOwnProperty(from) && map.hasOwnProperty(to)) {
      let valInCm = inputVal * map[from];

      return valInCm / map[to];
    }

    return inputVal;
  };

  const handleLengthCalculation = (e) => {
    let outputValue = convertLength(
      fromRef.current.value,
      toRef.current.value,
      inputRef.current.value
    );
    resultRef.current.value = outputValue;
  };

  return (
    <div className="flex flex-col gap-8 h-screen bg-slate-200 items-center justify-center">
      <h2 className="text-3xl font-bold text-center">Length Convertor</h2>

      <div className="flex flex-col w-full md:w-1/4 gap-2 px-5">
        <InputField
          defaultSelect="Meter"
          selectReference={fromRef}
          reference={inputRef}
          label="From"
          onchange={handleLengthCalculation}
        />
        <InputField
          defaultSelect="Centimeter"
          selectReference={toRef}
          reference={resultRef}
          label="To"
          disable="true"
          onchange={handleLengthCalculation}
        />
      </div>

      <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Reset
      </button>
    </div>
  );
}

export default App;
