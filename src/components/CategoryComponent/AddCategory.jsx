import React, {useState} from 'react';
import axios from 'axios';

const AddCategory = ({fetchCategories}) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    setInputText('');
    postData();
  };

  const postData = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:5555/api/categories',
      responseType: 'json',
      data: {
        name: `${inputText}`,
      },
    }).then((response) => {
      fetchCategories();
    });
  };

  return (
    <div className="add-categories-container">
      <h3>Add Categories</h3>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={inputText}
          onChange={() => handleChange(event)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddCategory;
