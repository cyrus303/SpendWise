import React from 'react';
import Card from './Card';
import {useContext} from 'react';
import {ExpenseContext} from '../../context/ExpenseContext';

const StatsComponents = () => {
  const categories = useContext(ExpenseContext);

  console.log(categories);
  return (
    <div>
      <Card />
    </div>
  );
};

export default StatsComponents;
