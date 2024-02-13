import React, { useState } from 'react';
import Board from '../board';

const GameInspector = ({ x, y, gameModeFunctionEval }) => {
  const [boardList, setBoardList] = useState(() => {
    return Array.from(Array(y * x).fill(null))
  });
  // 1 or 0, but want to add more players lul
  const [xIsNext, setXIsNext] = useState('X');


  const checkLine = (line) => {
    const firstCell = line[0];
    if (!firstCell) return false; // Empty line
    return line.every((cell) => cell === firstCell);
  }

  const horizontalLine = (board, y, i) => {
    return checkLine(board.slice(i, i + y));
  }

  const verticalLine = (board, x, j) => {
    return checkLine(board.filter((_, index) => index % x === j));
  }


  const calculateWinner = (x, y, board) => {
    if (x <= 0 || y <= 0 || !Array.isArray(board) || board.length !== x * y) {
      throw new Error('Invalid input');
    }

    let delta = x - 1;

    // For diagonals
    if (x === y) {
      let l_to_r_start = 0;
      let r_to_l_start = delta;

      let r_to_l_arr = [];
      let l_to_r_arr = [];

      while (r_to_l_start < x * y - 1) {
        r_to_l_arr.push(board[r_to_l_start]);
        l_to_r_arr.push(board[l_to_r_start]);

        r_to_l_start = r_to_l_start + delta;
        l_to_r_start = l_to_r_start + delta * 2;
      }
      if (!r_to_l_arr.includes(null) && checkLine(r_to_l_arr)) {
        console.log("Right Diagonal win found: " + r_to_l_arr[0]);
        return r_to_l_arr[0];
      }
      if (!l_to_r_arr.includes(null) && checkLine(l_to_r_arr)) {
        console.log("Left Diagonal win found: " + l_to_r_arr[0]);
        return l_to_r_arr[0];
      }
    }

    // Horizontal
    let j = 0;
    for (let i = 0; i < x * y; i += y) {
      // Horizontal
      if (horizontalLine(board, y, i)) {
        console.log("Horizontal win found: " + board[i]);
        return board[i]; // Winner found
      }

      // Vertical
      if (verticalLine(board, x, j)) {
        console.log("Vertical win found: " + board[j]);
        return board[j];
      }
      j++;
    }
    return null;
  }

  // const makeMove = (index) => {
  //   if (board[index] === null && !winner) {
  //     const newBoard = [...board];
  //     newBoard[index] = player;
  //     setBoard(newBoard);
  //     setPlayer(player === 'X' ? 'O' : 'X');
  //   }
  // };

  const makeBotMove = (board, move, sym) => {
    // 
    board[move] = sym;
  }

  const makeBotMoveEz = (board, symbol) => {
    if (!board.includes(null) || board.includes('')) {
      return;
    }

    let end = false;
    let move;
    while (!end) {
      move = Math.floor(Math.random() * board.length);
      if (board[move] !== null || board[move] !== '') {
        makeBotMove(board, move, symbol);
        end = !end;
      }
    }
    return;
  }

  const handleClick = (i, playerSymbol='X', enemySymbol='O') => {
    const newBoard = [...boardList];
    newBoard[i] = xIsNext ? playerSymbol : enemySymbol;
    setBoardList(newBoard);
    setXIsNext(!xIsNext);

    console.log(newBoard);
    calculateWinner(x, y, newBoard)
    // if (calculateWinner(newBoard) || newBoard[i]) {
    //     console.log("YEDS");
    // //   return;
    // }
  };

  return (
    <Board ruleFunction={handleClick} board={boardList} x={x} y={y} />
  )
}

export default GameInspector;
