import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';

const actionTypes = {
  INC: 'INCREMENT',
  DEC: 'DECREMENT',
};

const reducer = (state = 0, action) => {
  switch ( action.type ) {
    case actionTypes.INC: return state + 1;
    case actionTypes.DEC: return state - 1;
    default: return state;
  }
};

const store = createStore(reducer, 0);

const App = () => {
  const [value, setValue] = useState(store.getState());
  useEffect(() => {
    return store.subscribe(() => setValue(store.getState()));
  }, [])
  return (
    <div className="app">
      <div>
        {`State value is ${value}`}
      </div>
      <button type='button' onClick={() => store.dispatch({ type: actionTypes.INC })}>+</button>
      <button type='button' onClick={() => store.dispatch({ type: actionTypes.DEC })}>-</button>
    </div>
  );
}

export default App;
