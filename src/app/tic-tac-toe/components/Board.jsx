'use client';

import Square from "./Square";

const Board = () => {
    return<>
        <div className="board-container bg-green-200 w-60 border-2 rounded m-10">
            <div className="board-row flex justify-evenl"> 
                <Square />
                <Square />
                <Square />
            </div>
             <div className="board-row flex justify-evenly"> 
                <Square />
                <Square />
                <Square />
            </div>
             <div className="board-row flex justify-evenly"> 
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    </>
}

export default Board;