import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Retrieve the stored value from localStorage or use initialValue
  const storedValue = localStorage.getItem(key) || initialValue;

  // Create state to hold the current value
  const [value, setValue] = useState(storedValue);

  // Save the value to localStorage whenever it changes
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
