'use client';

import { useState, useEffect } from "react";
import Square from "./Square";

const calculateWinner = (squares) => {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6],             // diagonals
  ];

  for (let [a, b, c] of winningCombos) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningSquares: [a, b, c]
      };
    }
  }
  return null;
};

// Helper function to find a winning move for a player
const findWinningMove = (squares, player) => {
  // Check all empty squares
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      // Make a copy of the board
      const newSquares = [...squares];
      // Try the move
      newSquares[i] = player;
      // Check if this move wins the game
      const result = calculateWinner(newSquares);
      if (result && result.winner === player) {
        return i; // Return the winning move
      }
    }
  }
  return null; // No winning move found
};

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameStatus, setGameStatus] = useState("Your turn (X)");

  const resetGame = () => {
    setState(Array(9).fill(null));
    setWinner(null);
    setIsXTurn(true);
    setGameStatus("Your turn (X)");
  };

  // AI move logic
  const makeAIMove = () => {
    const aiPlayer = 'O';
    const humanPlayer = 'X';
    
    // 1. Check if AI can win in the next move
    const winningMove = findWinningMove(state, aiPlayer);
    if (winningMove !== null) {
      return winningMove;
    }
    
    // 2. Check if player can win in the next move and block it
    const blockingMove = findWinningMove(state, humanPlayer);
    if (blockingMove !== null) {
      return blockingMove;
    }
    
    // 3. If no immediate win or block, choose a random available move
    const availableMoves = state.map((square, index) => square === null ? index : null).filter(val => val !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  useEffect(() => {
    if (!isXTurn && !winner) {
      setGameStatus("AI is thinking...");
      
      const timer = setTimeout(() => {
        const aiMove = makeAIMove();
        
        if (aiMove === undefined) {
          // No moves left (draw)
          setGameStatus("Game ended in a draw!");
          return;
        }

        const botState = [...state];
        botState[aiMove] = "O";
        setState(botState);

        const result = calculateWinner(botState);
        if (result) {
          setWinner(result.winner);
          setGameStatus(`🎉 ${result.winner} wins!`);
          return;
        }

        if (botState.every(square => square !== null)) {
          setGameStatus("Game ended in a draw!");
          return;
        }

        setIsXTurn(true);
        setGameStatus("Your turn (X)");
      }, 500); // Slightly faster AI response

      return () => clearTimeout(timer);
    }
  }, [isXTurn, state, winner]);

  const handleClicked = (index) => {
    if (winner || state[index] !== null) return;

    const newState = [...state];
    newState[index] = "X";
    setState(newState);

    const result = calculateWinner(newState);
    if (result) {
      setWinner(result.winner);
      setGameStatus(`🎉 ${result.winner} wins!`);
      return;
    }

    if (newState.every(square => square !== null)) {
      setGameStatus("Game ended in a draw!");
      return;
    }

    setIsXTurn(false);
    setGameStatus("AI is thinking...");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Tic Tac Toe</h1>
        
        <div className="text-center py-4">
          <div className={`text-xl font-semibold ${
            gameStatus.includes('wins') ? 'text-green-600' : 'text-gray-700'
          }`}>
            {gameStatus}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 bg-gray-100 p-3 rounded-xl">
          {state.map((value, index) => (
            <Square 
              key={index} 
              handleClicked={() => handleClicked(index)} 
              value={value} 
            />
          ))}
        </div>

        {(winner || state.every(square => square !== null)) && (
          <button
            onClick={resetGame}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg 
                     transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:ring-opacity-50"
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default Board;
