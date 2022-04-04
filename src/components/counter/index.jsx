import {React, useState} from 'react'
import './index.css';
 

const Counter = () => {
    const [count, setCount] = useState(0);

    const formatCount = () => {
        return count === 0 ? 'Zero' : count;
    }


    const incrementCount = (e) => {
        setCount(count+1)
    }

    return (
        <div>
            <span>{formatCount()}</span>
            <h1>Boi</h1>
            <button type="button" onClick={incrementCount} className="btn btn-dark">Increment</button>
        </div>
    );
}

export default Counter;
