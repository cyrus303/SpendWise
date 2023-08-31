import CategoryRow from './CategoryRow';
import {useContext} from 'react';
import {ExpenseContext} from '../../context/ExpenseContext';

const ListingCategories = () => {
  const {categories, fetchCategories} = useContext(ExpenseContext);

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
