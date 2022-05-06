import React from 'react';

interface InputType {
  children:any;
}

const Input = ({ ...props }:InputType) => (
  <input
    className="input"
    {...props}
  >
  </input>
);

export default Input;
