
import { useState } from "react";
// Build a react app that lets us play tic-tac-toe

export default function TicTacToe() {
    // initial state is an array of 9 elements
  const [gameBoard, setGameBoard] = useState(Array(9).fill("-"));
  const [player, setPlayer] = useState("X")
  const handleClick = (index) => {
      if(gameBoard[index] !== "-" ){
          return ;
      }
      const newGameBoard = [...gameBoard];
      newGameBoard[index] = player;
      setGameBoard(newGameBoard);
      setPlayer( player === "X" ? "O" : "X")
  }
  return (
    <div >
      <h1>Tic Tac Toe </h1>
      <h3> I'm !Not a Rookie </h3>
      {gameBoard.map((square, i) => {
        return (
          <span key={i}>
            <button onClick={() => handleClick(i)}>{square}</button>
            {i === 2 || i === 5 ? <br/> : ""}
          </span>
        );
      })}
    </div>

  );
}
