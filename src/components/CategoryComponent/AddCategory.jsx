import {useState, useContext} from 'react';
import {ExpenseContext} from '../../context/ExpenseContext';

const AddCategory = () => {
  const [inputText, setInputText] = useState('');
  const {postData} = useContext(ExpenseContext);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (inputText.length > 0) {
      setInputText('');
      postData(inputText);
    }
  };

  return (
    <div className="add-categories-container">
      <h3>Add Categories</h3>
      <form onSubmit={() => handleClick(event)}>
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
