import ListExpense from './ListExpense';
import AddExpense from './AddExpense';
import './Expense.css';

import {useContext} from 'react';
import {ExpenseContext} from '../../context/ExpenseContext';

const ExpenseComponent = () => {
  const {expense, fetchExpenses} = useContext(ExpenseContext);

  return (
    <div className="expense-component-container">
      <ListExpense expense={expense} fetchExpenses={fetchExpenses} />
      <AddExpense fetchExpenses={fetchExpenses} />
    </div>
  );
};

export default ExpenseComponent;
