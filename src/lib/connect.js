import React, { useContext } from 'react';
import ReactReduxContext from './context';

const noop = () => ({});

/**
 * returns a function that takes a component and returns a
 * functional component that renders the component
 * with appropriate props from the state
 */
const connect = (
  mapStateToProps = noop,
  mapDispatchToProps = noop,
) => {
  // The returned function
  return (Component) => {
    // The returned component
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