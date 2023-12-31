/*
Expense App

  stats component
  -- value card component

-- category list
-- add category

-- expenses list
  -- sort by filter
  -- edit delete actions
-- add expense

-- expense distribution chart
-- expense by month chart

*/
import './App.css';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import ExpenseComponent from './components/ExpenseComponent/ExpenseComponent';
import GraphComponent from './components/GraphComponent/GraphComponent';
import StatsComponents from './components/StatsComponent/StatsComponents';
import {ExpenseContextProvider} from './context/ExpenseContext.jsx';

function App() {
  return (
    <>
      <ExpenseContextProvider>
        <h1>Expense App</h1>
        <StatsComponents />
        <CategoryComponent />
        <ExpenseComponent />
        <GraphComponent />
      </ExpenseContextProvider>
    </>
  );
}

export default App;
