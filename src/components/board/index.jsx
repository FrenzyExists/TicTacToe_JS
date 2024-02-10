import {React, useState} from 'react'
import './index.css';
import Square from '../square'

/**
 * 
 * @param {Array[Array]} board 
 * @returns 
 */
const Board = ({board, x, y, ruleFunction}) => {

    const generateBoard = () => {
        let b = ''
        const a = board.map((value, i) => {
            b += i % y === y-1 ? 'auto ' : ''
            return (<Square key={i} value={value} onClick={() => ruleFunction(i)}/>)
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