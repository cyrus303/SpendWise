import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ListTableRow = ({expenseItem, fetchExpenses}) => {
  const {title, amount, date, categoryId} = expenseItem;
  const [categoryType, setCatergoryType] = useState('');

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    await axios
      .get('http://localhost:5555/api/categories/' + categoryId)
      .then((response) => {
        setCatergoryType(response.data.name);
      });
  };

  const handleDelete = (event) => {
    deleteData(expenseItem._id);
  };

  const deleteData = async (id) => {
    await axios({
      method: 'delete',
      url: 'http://localhost:5555/api/expenses/' + id,
    }).then(() => {
      fetchExpenses();
    });
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{categoryType}</td>
      <td>{amount}</td>
      <td>{date}</td>
      <td>
        edit <button onClick={handleDelete}>delete</button>
      </td>
    </tr>
  );
};

export default ListTableRow;
