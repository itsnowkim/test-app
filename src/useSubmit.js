import { useReducer } from 'react';

function reducer(action) {
  console.log(action);
  return action.value;
}

export default function useSubmit(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onSubmit = (e) => {
    dispatch(e.target);
  };
  return [state, onSubmit];
}
