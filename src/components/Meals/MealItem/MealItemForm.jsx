import { useState, useEffect, useRef } from "react";
import { Input } from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export const MealItemForm = ({ onAddToCart, id }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    setAmountIsValid(
      enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 10
        ? false
        : true
    );
    onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = "0";
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + id,
            type: "number",
            min: "1",
            max: "10",
            step: "1",
            defaultValue: "0",
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-10)</p>}
      </form>
    </>
  );
};
