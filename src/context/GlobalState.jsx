import { useReducer, createContext, useContext } from 'react';
import reducer from './Reducer';

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};

const GlobalContext = createContext(initialState);
export const useGlobal = () => useContext(GlobalContext);

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(text, amount) {
    const count = state.transactions.length;

    dispatch({
      type: 'ADD_TRANSACTION',
      payload: { id: count + 1, text, amount },
    });
  }

  const calculateBalance = () => {
    return state.transactions.reduce(
      (accumulator, transaction) => accumulator + transaction.amount,
      0
    );
  };

  const calculateTotalIncome = () => {
    const incomes = state.transactions
      .map((transaction) => transaction.amount)
      .filter((amount) => amount > 0);

    return incomes.reduce((total, item) => total + item, 0);
  };

  const calculateTotalExpense = () => {
    const expenses = state.transactions
      .map((transaction) => transaction.amount)
      .filter((amount) => amount < 0);

    return expenses.reduce((total, item) => total + item, 0);
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        balance: calculateBalance(),
        income: calculateTotalIncome(),
        expense: calculateTotalExpense(),
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
