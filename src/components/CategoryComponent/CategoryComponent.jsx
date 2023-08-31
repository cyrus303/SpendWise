import ListingCategories from './ListingCategories';
import AddCategory from './AddCategory';
import './Category.css';

import {useContext} from 'react';
import {ExpenseContext} from '../../context/ExpenseContext';

const CategoryComponent = () => {
  const {categories, fetchCategories} = useContext(ExpenseContext);

  return (
    <div className="category-component">
      <ListingCategories
        categories={categories}
        fetchCategories={fetchCategories}
      />
      <AddCategory
        categories={categories}
        fetchCategories={fetchCategories}
      />
    </div>
  );
};

export default CategoryComponent;
