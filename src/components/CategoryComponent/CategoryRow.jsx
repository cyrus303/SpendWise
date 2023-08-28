import {useState} from 'react';
import axios from 'axios';

const CategoryRow = ({data, index, categories, fetchCategories}) => {
  const [editText, setEditText] = useState(false);
  const [inputText, setInputText] = useState(data.name);

  let viewMode = {};
  let editMode = {};
  if (editText) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleDelete = (event, index) => {
    deleteData(categories[index]._id);
  };

  const deleteData = async (id) => {
    await axios({
      method: 'delete',
      url: 'http://localhost:5555/api/categories/' + id,
    }).then(() => {
      fetchCategories();
    });
  };

  const handleEditing = (event, index) => {
    setEditText((prev) => !prev);
    if (editText === true && inputText !== data.name) {
      editData(categories[index]._id);
    }
  };

  const editData = async (id) => {
    // console.log('edit', id);
    await axios({
      method: 'put',
      url: 'http://localhost:5555/api/categories/' + id,
      responseType: 'json',
      data: {
        name: `${inputText}`,
      },
    }).then((response) => {
      console.log(response);
      fetchCategories();
    });
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div key={data._id} className="list-item">
      <li style={viewMode}> {data.name}</li>
      <input
        type="text"
        value={inputText}
        className="test-input"
        style={editMode}
        onChange={() => handleInputChange(event)}
      />
      <button onClick={() => handleEditing(event, index)}>
        Edit
      </button>
      <button onClick={() => handleDelete(event, index)}>
        Delete
      </button>
    </div>
  );
};

export default CategoryRow;
