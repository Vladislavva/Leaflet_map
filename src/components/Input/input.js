import React from 'react';

const Input = ({img, label}) => {
    return (
        
            <div className="input">
                <div className="input__item-wrapper">
                    <input placeholder={label}></input>
                </div>
                <div className="input__item-label">
                        <img className="input__item-img" src={img} />
                </div>
            </div>
        )
}

export default Input;