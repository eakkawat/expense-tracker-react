import { useState } from 'react';

export default function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  function submitForm(event) {
    event.preventDefault();
    console.log(text, amount);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitForm}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            type='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'></label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type='text'
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
}
