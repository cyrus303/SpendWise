import ListTableRow from './ListTableRow';
import {useContext} from 'react';
import {ExpenseContext} from '../../context/ExpenseContext';

const ListExpense = () => {
  const {expense, fetchExpenses} = useContext(ExpenseContext);
  return (
    <div className="table-container">
      <h3>Listing Expenses - ({expense.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expense.map((item, index) => {
            return (
              <ListTableRow
                expenseItem={item}
                key={item._id}
                fetchExpenses={fetchExpenses}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListExpense;
