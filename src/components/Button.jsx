import React from 'react';

import './Button.css'

const Button = ({children, onclick}) => {
    return (
        <button onclick={onclick} className='button'>
            {children}
        </button>
    );

}
 
export default Button;