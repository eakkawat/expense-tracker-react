import { useReducer, createContext, useContext } from 'react';

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

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const calculateBalance = () => {
    return state.transactions.reduce(
      (accumulator, transaction) => accumulator + transaction.amount,
      0
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        balance: calculateBalance(),
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
