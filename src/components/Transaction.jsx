export default function Transaction({ text, amount }) {
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
      <button className='delete-btn'>X</button>
    </li>
  );
}
