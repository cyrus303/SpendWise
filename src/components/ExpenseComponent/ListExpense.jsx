const ListExpense = ({expense}) => {
  return (
    <div className="table-container">
      <h3>Listing Expenses - ({expense.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ListExpense;
