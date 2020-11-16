import React from 'react';
import Button from '../Button/Button';

const Modal = ({modalName, modalInfo}) => {

return (<div className='modal'>
    <Button btnStyle={"btnCloseModal"} btnName={"&#10006;"} />
    <h4>{modalName}</h4>
    <p>{modalInfo}</p>


</div>


)

}; 
export default Button