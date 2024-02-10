import {React} from 'react'
import './index.css';
 
const Counter = ({winner, playerTurn}) => {

    return (
        <div>
            <h2 className='counter'>{winner ? `Player ${winner} won!` : `Player ${playerTurn}'s turn`}</h2>
        </div>
    );
}

export default Counter;
