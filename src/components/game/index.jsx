import {React, useState} from 'react'

// AI
const minimax = () => {

}

// Two player game
const TicTacToe = ({board, difficulty}) => {
    // True -> Player 1 | False -> player 2
    const [turn, setTurn] = useState(true)


    const bLength = board.length

    // Check if the board has a structure of 2x2, 3x3, nxn
    if (Math.sqrt(bLength) === +bLength && bLength % 1 !== (bLength | 0)) {
        return board
    }

    // {Symbol: True, Symbol: False} if there's a winner
    const checkWinner = (board) => {
        let x = Math.sqrt(bLength)
        for (var i = 0 ; i < x ; i++) {
            // Checks for columns
            for (var j = i*x ; j < (i+1)*x ; j++) {
                
            }

            // Check for rows
            for (var j = i ; j < bLength ; i += x) {

            }            

            // Check for diagonals
            

        }        

    }

    // Dumb AI, inserts an O or X at random
    const easyAI = (board, i) => {
        while (true) {
            let k = Math.ceil(Math.random() * bLength)
            if (board[k] == NaN) {
                board[k] = i
                return board
            }
        }
    }

    // Big brain AI, uses minimax algorithm
    const hardAI = (board, i) => {
    
    }

}


const Game = () => {
    const [gameMode, setGameMode] = useState({})
    const [currentMode, setCurrentMode] = useState('')

    const setNewGameMode = (modeKey, modeState) => {
        const copy = {...gameMode}
        copy[modeKey] = modeState
        setGameMode(copy)
    }


    return (
        <div>
            <button>{currentMode}</button>
        </div>
    )

}

export default Game;