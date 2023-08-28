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
      <input
        type="text"
        value={inputText}
        onChange={() => handleChange(event)}
      />
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

export default AddCategory;
