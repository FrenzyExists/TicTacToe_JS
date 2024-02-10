import { React } from 'react'
import './index.css'

const Game = ({ gameMode, currentGameModeIndex, setIndexFunction }) => {
    const handleGameModeSelection = () => {
        currentGameModeIndex = (currentGameModeIndex + 1) % (gameMode.length)
        setIndexFunction(currentGameModeIndex)
    }
    return (
        <div>
            <button onClick={handleGameModeSelection} className="button-19">{gameMode[currentGameModeIndex]}</button>
        </div>
    )

}

export default Game;