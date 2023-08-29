import axios from 'axios';
import React, {useEffect, useState} from 'react';

const AddExpense = ({fetchExpenses}) => {
  const [categoryTypes, setCategoryTypes] = useState([]);

  const [titleText, setTitleText] = useState('');
  const [amountText, setAmountText] = useState('');
  const [dateText, setDateText] = useState('');
  const [dropdownText, setDropdownText] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const formateDate = (date) => {
    if (dateText !== '') {
      const inputValue = date;
      const parts = inputValue.split('-');
      const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      return formattedDate;
    }
  };

  useEffect(() => {
    fetchCategoriesTypes();
  }, []);

  const fetchCategoriesTypes = async (id) => {
    await axios({
      method: 'get',
      url: 'http://localhost:5555/api/categories/',
    }).then((response) => {
      setCategoryTypes(response.data);
    });
  };

  const handleTitleChange = (event) => {
    setTitleText(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmountText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateText(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setDropdownText(event.target.value);
    const matchedCategories = categoryTypes.filter((item) => {
      return item.name === event.target.value;
    });
    setCategoryId(matchedCategories[0]._id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedDate = formateDate(dateText);
    if (
      titleText !== '' &&
      amountText !== '' &&
      formattedDate !== undefined &&
      dropdownText !== ''
    ) {
      postExpense(titleText, amountText, formattedDate, categoryId);
      setTitleText('');
      setAmountText('');
      setDateText('');
      setDropdownText('');
      setCategoryId('');
    }
  };

  const postExpense = async (
    titleText,
    amountText,
    formattedDate,
    categoryId
  ) => {
    await axios({
      method: 'post',
      url: 'http://localhost:5555/api/expenses',
      responseType: 'json',
      data: {
        title: titleText,
        amount: amountText,
        date: formattedDate,
        categoryId: categoryId,
      },
    }).then((response) => {
      console.log(response);
      fetchExpenses();
    });
  };

  return (
    <div className="add-expense-container">
      <h3>AddExpense</h3>
      <form
        className="form-container"
        onSubmit={() => handleSubmit(event)}
      >
        <input
          type="text"
          placeholder="Title"
          value={titleText}
          onChange={() => handleTitleChange(event)}
        />
        <select
          name="category"
          id="category"
          value={dropdownText}
          onChange={() => handleDropdownChange(event)}
        >
          <option></option>
          {categoryTypes.map((item) => {
            return (
              <option value={item.name} key={item._id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Amount"
          value={amountText}
          onChange={() => handleAmountChange(event)}
        />
        <input
          type="date"
          id="date"
          name="date"
          value={dateText}
          onChange={() => handleDateChange(event)}
        ></input>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddExpense;
