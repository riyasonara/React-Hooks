import React from 'react';
import useLocalStorage from './custom';

function Local() {
  const [name, setName] = useLocalStorage('username', 'Guest');

  return (
    <div>
      <p>Hello, {name}!</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {
            return setName(e.target.value);
        }}
      />
    </div>
  );
}

export default Local;
