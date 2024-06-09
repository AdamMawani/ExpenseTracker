import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => (
  <div className="expenses">
    <h2>Expenses</h2>
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          <span>{expense.description}</span>
          <span>${expense.amount.toFixed(2)}</span>
          <button onClick={() => onDeleteExpense(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ExpenseList;