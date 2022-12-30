import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveNewExpense(expenseData);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          showFormHandler={showFormHandler}
          onSaveExpenseData={saveExpenseHandler}
        ></ExpenseForm>
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
