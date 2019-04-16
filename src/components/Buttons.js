import React from 'react';
import './Buttons.css';

const Buttons = (props) => {
  return (
    <div className="buttons">
      <button onClick={() => props.click('all')}>All</button>
      <button onClick={() => props.click('female')}>Women</button>
      <button onClick={() => props.click('male')}>Man</button>
    </div>
  );
}

export default Buttons;