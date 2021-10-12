import { useState } from "react";
import Button from "./components/Button";
import './App.css';

function App() {
 const [screen, setScreen] = useState("0");
  const [currentNumber, setCurrentNumber] = useState("");
  const [expression, setExpression] = useState([]);

  /* Runs when a number is clicked */
  const onNumberButtonClick = (number) => {
    if (screen === "0") {
      setScreen(number);
    } else {
      setCurrentNumber(currentNumber + number);
      setScreen(screen + number);
    }
  };

  /* Runs when an operation number is clicked */
  const onOperationButtonClick = (operation) => {
    if (screen !== "0") {
      expression.push(screen);
      expression.push(operation);
      setScreen(screen + " " + operation + " ");
      setCurrentNumber("");
    }
  };

  /* Runs when the equal button is clicked */
  const onEqualButtonClick = () => {
    if (expression.length >= 2) {
      expression.push(currentNumber);
      setCurrentNumber("");
      let x = expression[0];
      let sign = expression[1];
      let y = expression[2];
      setScreen(calculate(x, sign, y));
      setExpression([]);
    }
  };

  /* Runs when the clear button is clicked */
  const onClearButtonClick = () => {
    setCurrentNumber("");
    setScreen("0");
    setExpression([]);
  };

  /* Computes the calculation */
  const calculate = (operand1, operator, operand2) => {
    console.log(operand1 + " " + operator + " " + operand2);
    switch (operator) {
      case "+":
        return parseInt(operand1, 10) + parseInt(operand2, 10);
      case "-":
        return parseInt(operand1, 10) - parseInt(operand2, 10);
      default:
        return "Unsupported operand!";
    }
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <div className="input-box">{screen}</div>
        <div className="calculator">
          <Button param="7" action={onNumberButtonClick} className="" />
          <Button param="8" action={onNumberButtonClick} className="" />
          <Button param="9" action={onNumberButtonClick} className="" />
          <Button param="4" action={onNumberButtonClick} className="" />
          <Button param="5" action={onNumberButtonClick} className="" />
          <Button param="6" action={onNumberButtonClick} className="" />
          <Button param="1" action={onNumberButtonClick} className="" />
          <Button param="2" action={onNumberButtonClick} className="" />
          <Button param="3" action={onNumberButtonClick} className="" />
          <Button param="-" action={onOperationButtonClick} className="" />
          <Button param="0" action={onNumberButtonClick} className="" />
          <Button param="+" action={onOperationButtonClick} className="" />
          <Button param="C" action={onClearButtonClick} className="" />
          <Button
            param="="
            action={onEqualButtonClick}
            className="equal-sign"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
