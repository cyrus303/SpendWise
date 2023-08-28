import React, {useState} from 'react';
import axios from 'axios';
import CategoryRow from './CategoryRow';

const ListingCategories = ({categories, fetchCategories}) => {
  return (
    <div className="listing-categories-container">
      <h3>Listing Categories ({categories.length})</h3>
      <ul className="list-container">
        {categories.map((item, index) => {
          return (
            <CategoryRow
              data={item}
              index={index}
              categories={categories}
              fetchCategories={fetchCategories}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ListingCategories;
