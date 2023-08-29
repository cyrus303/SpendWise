import ListTableRow from './ListTableRow';

const ListExpense = ({expense}) => {
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
          {expense.map((item) => {
            return <ListTableRow expenseItem={item} key={item._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListExpense;
