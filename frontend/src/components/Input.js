import React from 'react';
import './Input.css'

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="input-container">
      <div className="input-icon">
        <Icon className="input-icon-svg" />
      </div>
      <input {...props} className="input-field" />
    </div>
  );
};

export default Input;
