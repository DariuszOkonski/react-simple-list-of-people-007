import React from 'react';
import './SinglePersonDisplay.css';

const SinglePersonDisplay = (props) => {
  const { name, age, sex } = props.person;

  return (
    <div className='singelPersonDisplay'>
      <h3>{name}</h3>
      <h4>User's information:</h4>
      <p>Age: <span>{age}</span></p>
      <p>Sex: <span>{sex}</span></p>
    </div>
  );
}

export default SinglePersonDisplay;