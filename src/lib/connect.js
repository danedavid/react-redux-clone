import React, { useContext } from 'react';
import ReactReduxContext from './context';

const noop = () => ({});

/**
 * Returns a function that takes a component and returns a
 * functional component that renders the component
 * with appropriate props from the state
 */
const connect = (
  mapStateToProps = noop,
  mapDispatchToProps = noop,
) => {
  // The returned function, which is basically an HOC
  return (Component) => {
    /**
     * The component that is actually rendered.
     * The useContext hook makes sure that everytime the context value
     * is updated, the component re-renders with the new context value
     */
    return (props) => {
      const { state, dispatch } = useContext(ReactReduxContext);
      const stateProps = typeof mapStateToProps === 'function'
        ? mapStateToProps(state)
        : {};
      const dispatchProps = typeof mapDispatchToProps === 'function'
        ? mapDispatchToProps(dispatch)
        : {};
      return (
        <Component
          {...stateProps}
          {...dispatchProps}
          {...props}
        />
      );
    }
  };
};

export default connect;