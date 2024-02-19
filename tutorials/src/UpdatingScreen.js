import { useState } from 'react'

function NotSharedButtons() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times.
    </button>
  );
}

function CountButton(props) {
  return (
    <button onClick={props.handleClick}>{props.count}</button>
  );
}

function SharedButtons() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <CountButton count={count} handleClick={handleClick} />
      <CountButton count={count} handleClick={handleClick} />
    </>
  );
}

export {SharedButtons, NotSharedButtons};