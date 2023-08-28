import React, {useEffect, useState} from 'react';
import ListingCategories from './ListingCategories';
import AddCategory from './AddCategory';
import axios from 'axios';
import './Category.css';

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    await axios
      .get('http://localhost:5555/api/categories')
      .then((response) => {
        setCategories(response.data);
      });
  };

  return (
    <div className="category-component">
      <ListingCategories
        categories={categories}
        fetchCategories={fetchCategories}
      />
      <AddCategory
        fetchCategories={fetchCategories}
        categories={categories}
      />
    </div>
  );
};

export default CategoryComponent;
