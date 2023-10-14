import { useGlobal } from '../context/GlobalState';

export default function Transaction({ id, text, amount }) {
  const { deleteTransaction } = useGlobal();

  const sign =
    amount > 0
      ? { operation: '+', class: 'plus' }
      : { operation: '-', class: 'minus' };

  return (
    <li className={sign.class}>
      {text}{' '}
      <span>
        {sign.operation}${Math.abs(amount)}
      </span>{' '}
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        X
      </button>
    </li>
  );
}
