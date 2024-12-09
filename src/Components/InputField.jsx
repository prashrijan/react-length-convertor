import React from "react";

const InputField = ({
  label,
  value,
  changeDropDownValue,
  disable,
  onchange,
  dropDownValue,
}) => {
  const options = ["Meter", "Centimeter", "Foot", "Inches"];
  return (
    <>
      <div className="flex gap-3 items-center mt-4">
        <label
          htmlFor={label}
          className="blocktext-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <select
          id="length"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => changeDropDownValue(e.target.value)}
          defaultValue={dropDownValue}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>

      <input
        type="number"
        id="from"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter a length"
        value={value}
        onChange={onchange}
        readOnly={disable === "true" ? true : false}
      />
    </>
  );
};

export default InputField;
