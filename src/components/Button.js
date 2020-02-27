import React from 'react';
import './Button.css';



function Button() {
  return (
    <div className="App">
      {this.props.children}
    </div>

  );
}

export default Button;
