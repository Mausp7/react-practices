import React from 'react'
import Button from './Button';

const ButtonList = ({number, text, onClick}) => {
    return (
        <div>
            {[...Array(number)].map((_, i)=> {return <Button key={i} text={text} onClick={onClick} />})}
        </div>
    );
};

export default ButtonList;
