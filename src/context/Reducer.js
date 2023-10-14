export default function reducer(state, action) {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case "ADD_TRANSACTION":
            return {
                transactions: [
                    ...state.transactions,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        amount: parseFloat(action.payload.amount)
                    }
                ]
            }

        default:
            return state;
    }
}