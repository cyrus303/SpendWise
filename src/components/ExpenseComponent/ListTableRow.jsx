import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ListTableRow = ({expenseItem}) => {
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
  return (
    <tr>
      <td>{title}</td>
      <td>{categoryType}</td>
      <td>{amount}</td>
      <td>{date}</td>
      <td>edit delete</td>
    </tr>
  );
};

export default ListTableRow;
