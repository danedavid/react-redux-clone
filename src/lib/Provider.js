import React, { useState, useEffect } from 'react';
import ReactReduxContext from './context';

/**
 * <Provider/> component.
 * Renders the React context provider. The value of the context
 * is of the shape:
 * {
 *   state: current Redux store obtained by store.getState()
 *   dispatch: store.dispatch
 * }
 */
export default ({
  store,
  children,
}) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    return unsubscribe;
  }, [store]);

  return (
    <ReactReduxContext.Provider
      value={{
        state,
        dispatch: store.dispatch,
      }}
    >
      {children}
    </ReactReduxContext.Provider>
  );
};