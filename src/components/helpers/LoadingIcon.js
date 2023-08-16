import React from 'react';
import ReactLoading from 'react-loading';
 
const LoadingIconComponent = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={64} width={64} />
);
 
export default LoadingIconComponent;