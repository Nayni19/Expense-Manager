import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 200,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 10000,
    date: new Date(2019, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 12000,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 1800,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {
  const [expenses, setExpenses] =  useState(INITIAL_EXPENSES)
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses  => {return [expense, ...expenses]}
    );
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items = {expenses} />
    </div>
  );
};

export default App;
