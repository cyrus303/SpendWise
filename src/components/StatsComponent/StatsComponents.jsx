import TotalAmountCard from './TotalAmountCard';
import CategoryCard from './CategoryCard';
import './stats.css';

const StatsComponents = () => {
  return (
    <div className="stats-container">
      <TotalAmountCard />
      <CategoryCard />
    </div>
  );
};

export default StatsComponents;
