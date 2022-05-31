
import {useState} from 'react'
export default function Sudoku(){
    // 9 by 9, each column and rown and each 3*3 has digits 1-9
    // peers are cells belonging to same column, row, or square
    // make 9 by 9 array

    const game = [
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell]
    ]
    const cell = {
        value: 9,
        notes: Set(1, 2, 3),
        prefilled: false
    }
    const [gameDone, setGameDone] = (false)
    return (
        <div></div>
    )
}