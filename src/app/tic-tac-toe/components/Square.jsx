'use client';

import { useState } from "react";

const Square = ({index}) => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    
    const handleClicked = (id) => {
        const symbole = "X";
        console.log('clicked in func: '+id);
        const copyState = [...state];
        copyState[id] = symbole;
        console.log(copyState);
        setState([...copyState]);
    }

    return <>
        <div className="square border-2 w-80 h-20 flex justify-center items-center" onClick={() => handleClicked(index)}>
          {state[index]}
        </div>
    </>
}

export default Square;