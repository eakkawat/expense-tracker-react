import { useGlobal } from '../context/GlobalState';

export default function Balance() {
  const { balance } = useGlobal();

  return (
    <>
      <h4>Your balance</h4>
      <h1>${balance.toFixed(2)}</h1>
    </>
  );
}
