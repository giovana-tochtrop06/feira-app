import React from 'react';

import './sum.css'

const Sum = ({ number1, number2 }) => { 
    return (
        <div>
            <div>
                Você está somando {number1} e {number2}
            </div>
            <div>
                E o resultado é {number1 + number2}
            </div>
        </div>
    )
}

export default Sum;
