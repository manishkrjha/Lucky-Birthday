import "./styles.css";
import React, { useState } from "react";

var inputStyling = {
  width: "15rem",
  padding: "0.3rem",
  border: "1px solid black",
  borderRadius: "0.3rem"
};

export default function App() {
  const [displayValue, setDisplayValue] = useState("");
  // const [dateSum, setDateSum] = useState(0);
  var [dateInp, setDate] = useState(0);
  const [num, setNum] = useState(0);

  function calenderChangeHandler(event) {
    setDate(event.target.value);
  }

  function numberChangeHandler(event) {
    setNum(event.target.value);
  }

  function getDateSum() {
    dateInp = dateInp.replaceAll("-", "");
    let sum = 0;

    for (let i = 0; i < dateInp.length; i++) {
      sum += parseInt(dateInp[i]);
    }

    // console.log(sum);
    return sum;
  }

  function buttonClickHandler() {
    if (dateInp === 0 || num === 0) {
      setDisplayValue("Please enter both fields");
      return;
    }

    var dateSum = getDateSum();

    if (dateSum % num === 0) {
      setDisplayValue(num + " is a lucky number 😄");
    } else {
      setDisplayValue(num + " is not that lucky 🥺");
    }
  }
  return (
    <div className="App" style={{ marginTop: "6rem" }}>
      <h1 style={{ fontSize: "1.5rem" }}>Is your Birthday Lucky? </h1>
      <p style={{ marginLeft: "-8.5rem" }}>Date of Birth:</p>
      <input
        style={inputStyling}
        type="date"
        onChange={calenderChangeHandler}
      ></input>
      <p style={{ marginLeft: "-7rem" }}>Lucky Number:</p>
      <input style={inputStyling} onChange={numberChangeHandler}></input>
      <div style={{ marginTop: "0.8rem" }}>
        <button
          style={{
            padding: "0.5rem",
            border: "2px solid black",
            borderRadius: "0.5rem",
            backgroundColor: "#7c3aed",
            cursor: "pointer"
          }}
          onClick={buttonClickHandler}
        >
          Check number
        </button>
      </div>
      <div style={{ marginTop: "1rem" }}>{displayValue}</div>
      <footer style={{ marginTop: "3rem" }}>
        <div>
          <p>© | 2021 | Manish Jha</p>
        </div>
        {/* <div>Reminder: ADD links</div> */}
      </footer>
    </div>
  );
}
