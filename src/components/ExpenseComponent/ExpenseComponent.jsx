import React, {useState, useEffect} from 'react';
import ListExpense from './ListExpense';
import AddExpense from './AddExpense';
import axios from 'axios';
import './Expense.css';

const ExpenseComponent = () => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    await axios
      .get('http://localhost:5555/api/expenses')
      .then((response) => {
        setExpense(response.data);
      });
  };

  return (
    <div className="expense-component-container">
      <ListExpense expense={expense} />
      <AddExpense />
    </div>
  );
};

export default ExpenseComponent;
