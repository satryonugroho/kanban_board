import React from 'react'
import { useCheckToken } from '../../hooks'

const withTokenCheck = (WrappedComponent) => {
  return (props) => {
    useCheckToken();
    return <WrappedComponent {...props} />;
  };
};

export default withTokenCheck;