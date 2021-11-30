import React from 'react';
import useInputs from './useInputs';

export const DefaultForm = ({ onSubmit, field }) => {
  const [typing, setTyping] = useInputs('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(typing, field);
    setTyping('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={typing} onChange={setTyping} />
        <button>확인</button>
      </form>
      <br />
    </div>
  );
};
