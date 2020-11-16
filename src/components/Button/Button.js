import React from 'react';

const Button = ({btnName, btnStyle, clickfunc}) => {

return (<button className={btnStyle} onClick={(e)=>clickfunc(e)}  >{btnName}</button>)

};
 
export default Button

