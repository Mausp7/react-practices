import React from 'react'
import Button from './Button';

const ButtonList = ({number, text, onClick}) => {
    let Buttons = [];
    for (let i = 0; i < number; i++) {
        Buttons.push(<Button key={i} text={text} onClick={onClick} />);
    };

    return (
        <div>
            {Buttons}
        </div>
        )
}

export default ButtonList;
