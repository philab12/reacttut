import React from 'react';

const ControlledSelectGreeting = (props) => {

    const {title, onTextChange} = props; 

    const changeHandler = event => {
        onTextChange(event.target.value); 
      }

    

  return ( 
  <div>
      {title}
      <div>
      <select onChange={changeHandler}>
        <option value="Select 1">Select 1</option>
        <option value="Select 2">Select 2</option>
        <option value="Select 3">Select 3</option>
      </select>
          </div>
  </div> 
  );
};

export default ControlledSelectGreeting;
