import React, { useState } from "react";
import "./App.css";

// interface fibonacci {
//   calculatedNumber: number;
// }

function App() {
  const [baseNumber, setBaseNumber] = useState("");
  const [fibonacciNumber, setFibonacciNumber] = useState(null);
  // const [fibonacciNumber, setFibonacciNumber] = useState<fibonacci>({calculatedNumber: null}); Attempting to integrate an interface

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`http://localhost:4000/api/fibonacci/${baseNumber}`)
      .then((response) => response.json())
      .then((res) => setFibonacciNumber(res.calculatedNumber))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Calculate Fibonacci!</h1>
      <form onSubmit={submitForm}>
        <div>
          <input
            value={baseNumber}
            onChange={(e) => setBaseNumber(e.target.value)}
            type="number"
            id="basenumber"
            name="basenumber"
          />
          <button type="submit">Calculate</button>
        </div>
      </form>
      {/* <p>Fibonacci result: {fibonacciNumber.calculatedNumber}</p>  with interface approach*/}
      <p>Fibonacci result: {fibonacciNumber}</p>
    </div>
  );
}

export default App;
