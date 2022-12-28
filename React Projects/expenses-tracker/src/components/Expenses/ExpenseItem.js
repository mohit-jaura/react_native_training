import React, { useState } from "react";
import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";
function ExpenseItem(props) {
  const expense = props.expense;
  const fullDate = expense.date;
  const month = fullDate.toLocaleString("en-US", { month: "long" });
  const day = fullDate.toLocaleString("en-US", { day: "2-digit" });
  const year = fullDate.getFullYear();
  const [title, setTitle] = useState(expense.title);

  function clickHandler() {
    setTitle("Title changed");
  }
  return (
    <Card className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
