import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: "20",
    date: new Date(2020, 5, 13),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: "250",
    date: new Date(2021, 6, 12),
  },
  {
    id: "e3",
    title: "Vacation",
    amount: "2500",
    date: new Date(2019, 3, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses( prevExpenses => {
      console.log(prevExpenses)
      return [expense, ...prevExpenses]})
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
