'use client';

import { useState } from "react";
import Square from "./Square";

const Board = () => {
    return<>
        <div className="board-container bg-green-200 w-60 border-2 rounded m-10">
            <div className="board-row flex justify-evenl"> 
                <Square index={0}/>
                <Square index={1}/>
                <Square index={2}/>
            </div>
             <div className="board-row flex justify-evenly"> 
                <Square index={3}/>
                <Square index={4}/>
                <Square index={5}/>
            </div>
             <div className="board-row flex justify-evenly"> 
                <Square index={6}/>
                <Square index={7}/>
                <Square index={8}/>
            </div>
        </div>
    </>
}

export default Board;