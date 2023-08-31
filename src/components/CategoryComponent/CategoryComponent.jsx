import ListingCategories from './ListingCategories';
import AddCategory from './AddCategory';
import './Category.css';

const CategoryComponent = () => {
  return (
    <div className="category-component">
      <ListingCategories />
      <AddCategory />
    </div>
  );
};

export default CategoryComponent;
