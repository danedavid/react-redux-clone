import React from 'react';
import { Provider, connect } from './lib';
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

const Value = connect(
  state => ({
    value: state,
  })
)(({
  value
}) => {
  return (
    <div>
      {`State value is ${value}`}
    </div>
  );
});

const ButtonPanel = connect(
  null,
  dispatch => ({
    increment: () => {
      dispatch({ type: actionTypes.INC });
    },
    decrement: () => {
      dispatch({ type: actionTypes.DEC });
    }
  })
)(({
  increment,
  decrement,
}) => {
  return (
    <>
      <button type='button' onClick={increment}>+</button>
      <button type='button' onClick={decrement}>-</button>
    </>
  );
});

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Value/>
        <ButtonPanel/>
      </Provider>
    </div>
  );
}

export default App;
