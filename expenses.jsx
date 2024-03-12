// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: 0 });

  const handleDescriptionChange = (e) => {
    setNewExpense({ ...newExpense, description: e.target.value });
  };

  const handleAmountChange = (e) => {
    setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) });
  };

  const addExpense = () => {
    if (newExpense.description !== '' && newExpense.amount !== 0) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: '', amount: 0 });
    } else {
      alert('Please enter a description and amount for the expense.');
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={handleDescriptionChange}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleAmountChange}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expenses">
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.description}</span>
              <span>${expense.amount.toFixed(2)}</span>
              <button onClick={() => deleteExpense(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
