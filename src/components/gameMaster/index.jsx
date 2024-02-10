import React, { useState } from 'react';
import Board from '../board';
import StatusDisplay from '../display';

// const GameInspector = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   const handleClick = (i) => {
//     const newBoard = [...board];
//     if (calculateWinner(newBoard) || newBoard[i]) {
//       return;
//     }
//     newBoard[i] = xIsNext ? 'X' : 'O';
//     setBoard(newBoard);
//     setXIsNext(!xIsNext);
//   };

//   const calculateWinner = (squares) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   };

//   const winner = calculateWinner(board);
//   const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board squares={board} onClick={handleClick} />
//       </div>
//       <div className="game-info">
//         <StatusDisplay status={status} />
//       </div>
//     </div>
//   );
// };

/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
const GameInspector = ({ x, y, gameModeFunctionEval }) => {
    const [boardList, setBoardList] = useState(() => {
        return Array.from(Array(y * x).fill(null))
    });
    // 1 or 0, but want to add more players lul
    const [xIsNext, setXIsNext] = useState('X');

    const calculateWinner = (x, y, board) => {
        for (let i = 0; i < y; i++) {
            if (board[i][0] !== '' && board[i].every(cell => cell === board[i][0])) {
                return board[i][0];
            }
        }
    }

    const handleClick = (i) => {
        console.log("boi"); 
        const newBoard = [...boardList];
        if (calculateWinner(newBoard) || newBoard[i]) {
        //   return;
        }
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoardList(newBoard);
        setXIsNext(!xIsNext);
      };


    return (
        
        <Board ruleFunction={handleClick} board={boardList} x={x} y={y} />

    )
}

export default GameInspector;
