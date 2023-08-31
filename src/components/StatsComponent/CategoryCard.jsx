import {useContext, useEffect, useState} from 'react';
import {ExpenseContext} from '../../context/ExpenseContext';
import axios from 'axios';

const CategoryCard = () => {
  const {expense} = useContext(ExpenseContext);
  const [categoryType, setCatergoryType] = useState('');

  useEffect(() => {
    if (expense.length > 0) {
      fetchCategoryType(sortedCategories[0]?.categoryId);
    }
  }, [expense]);

  const fetchCategoryType = async (categoryId) => {
    await axios
      .get('http://localhost:5555/api/categories/' + categoryId)
      .then((response) => {
        setCatergoryType(response.data.name);
      });
  };

  const categoryTotals = expense.reduce(
    (accumulator, currentItem) => {
      const categoryId = currentItem.categoryId;
      const amount = parseFloat(currentItem.amount);

      if (!accumulator[categoryId]) {
        accumulator[categoryId] = {
          categoryId: categoryId,
          total: amount,
        };
      } else {
        accumulator[categoryId].total += amount;
      }
      return accumulator;
    },
    {}
  );

  const sortedCategories = Object.values(categoryTotals).sort(
    (a, b) => b.total - a.total
  );

  return (
    <div>
      <h2>Most Spent Category</h2>
      <p>{categoryType}</p>
    </div>
  );
};

export default CategoryCard;
