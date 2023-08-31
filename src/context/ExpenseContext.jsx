import {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const ExpenseContext = createContext();

const ExpenseContextProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchExpenses();
  }, []);

  const fetchCategories = async () => {
    await axios
      .get('http://localhost:5555/api/categories')
      .then((response) => {
        setCategories(response.data);
      });
  };

  const fetchExpenses = async () => {
    await axios
      .get('http://localhost:5555/api/expenses')
      .then((response) => {
        setExpense(response.data);
      });
  };

  const contextValue = {
    categories,
    fetchCategories,
    expense,
    fetchExpenses,
  };

  return (
    <ExpenseContext.Provider value={contextValue}>
      {children}
    </ExpenseContext.Provider>
  );
};

export {ExpenseContext, ExpenseContextProvider};
