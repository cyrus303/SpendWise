import {useContext} from 'react';
import {ExpenseContext} from '../../context/ExpenseContext';

const TotalAmountCard = () => {
  const {expense} = useContext(ExpenseContext);
  const totalExpense = expense.reduce((prevValue, currValue) => {
    return prevValue + +currValue.amount;
  }, 0);
  return (
    <div>
      <h2>Total Spend</h2>
      <p>{totalExpense}</p>
    </div>
  );
};

export default TotalAmountCard;
