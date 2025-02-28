import { useState } from 'react';

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return { counter, increment, decrement };
};
