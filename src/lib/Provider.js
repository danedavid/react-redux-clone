import React, { useState, useEffect } from 'react';
import ReactReduxContext from './context';

export default ({
  store,
  children,
}) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    return store.subscribe(() => setState(store.getState()));
  });

  return (
    <ReactReduxContext.Provider
      value={{
        state: state,
        dispatch: store.dispatch,
      }}
    >
      {children}
    </ReactReduxContext.Provider>
  );
};