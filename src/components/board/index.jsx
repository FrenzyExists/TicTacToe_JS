import {React, useState} from 'react'
import './index.css';
import Square from '../square'

const Board = ({x, y, ruleFunction}) => {
    const [boardList, setBoardList] = useState( () => {
        return Array.from(Array(y*x).fill(null))
    });
    
    const handleClick = (boxId) => {
        const copy = [...boardList]
        if (ruleFunction) {
            copy = ruleFunction(copy)
        } else {
            copy[boxId] = copy[boxId] === 'X' ? '' : 'X'    
        }
        setBoardList(copy)
        console.log(boxId)
    }

    const generateBoard = () => {
        let b = ''
        const a = boardList.map((value, i) => {
            b += i % x === x-1 ? 'auto ' : ''
            return (<Square key={i} value={value} onClick={() => handleClick(i)} />)
        })
        let styles = {
            display: 'grid',
            backgroundColor: '#2C2E3E',
            justifyItems: 'center',
            gridTemplateColumns: b,
            borderRadius: '14px',
            padding: '12px'
        }
        return (
            <div style={styles} className="container">
            {a}
            </div>
        )
    } 

    return (
        <div className="wrapper-container">
            {generateBoard()}
        </div>
    )
}

export default Board;