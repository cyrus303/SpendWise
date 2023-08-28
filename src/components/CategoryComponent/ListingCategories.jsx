import React from 'react';
import axios from 'axios';

const ListingCategories = ({categories, fetchCategories}) => {
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

  return (
    <div className="listing-categories-container">
      <h3>Listing Categories ({categories.length})</h3>
      <ul className="list-container">
        {categories.map((item, index) => {
          return (
            <div key={item._id} className="list-item">
              <li>{item.name}</li>
              <button onClick={() => handleDelete(event, index)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListingCategories;
