import { useGlobal } from '../context/GlobalState';

export default function IncomeExpenses() {
  const { income, expense } = useGlobal();

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          -${expense}
        </p>
      </div>
    </div>
  );
}
