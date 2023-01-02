import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "../Expenses/Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const onChangeFilterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expenseItem) => (
      <ExpenseItem key={expenseItem.id} expense={expenseItem}></ExpenseItem>
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilterYear={onChangeFilterYearHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      {expensesContent}
    </Card>
  );
}
export default Expenses;
