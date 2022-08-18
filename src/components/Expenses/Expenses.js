import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterGetYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expenses) => expenses.date.getFullYear() == filteredYear
  );
    
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          getYear={filterGetYear}
        ></ExpenseFilter>
        <ExpensesChart expenses= {filteredExpenses}/>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;
