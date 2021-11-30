import React, { useReducer } from 'react';
import { DefaultForm } from './DefaultForm';

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.input,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;
  const handleSubmit = (input, field) => {
    dispatch({ field: field, input: input });
  };

  return (
    <div>
      <DefaultForm onSubmit={handleSubmit} field="name" />
      <span>이름:{name}</span>
      <DefaultForm onSubmit={handleSubmit} field="nickname" />
      <span>닉네임:{nickname}</span>
    </div>
  );
};

export default Info;
