import React, { useState } from "react";
import { useParams } from "react-router";

export default function Game() {
  const [grid, setGrid] = useState([
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
    ["9", "10", "11", "12"],
    ["13", "14", "15", "16"],
  ]);
  const [user, setUser] = useState("X");
  const [winner, setWinner] = useState("");
  const rows = 4;

  function checkRow(row: number, column: number): boolean {
    let c = 0;
    for (let i = 0; i < rows; i++) {
      if (grid[row][i] === user) {
        c++;
      }
    }
    return c === rows;
  }
  function checkColumn(row: number, column: number): boolean {
    let c = 0;
    for (let i = 0; i < rows; i++) {
      if (grid[i][column] === user) {
        c++;
      }
    }
    return c === rows;
  }
  function checkDiagnol(row: number, column: number) {
    let c = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows; j++) {
        if (i === j || i + j === rows - 1) {
          if (grid[i][j] === user ) {
            c++;
          }
        }
      }
    }
    return c === rows;
  }

  function isWinner(row: number, column: number): boolean {
    return (
      checkColumn(row, column) ||
      checkDiagnol(row, column) ||
      checkRow(row, column)
    );
  }
  return (
    <div>
      <h1>{winner.trim().length >= 1 ? `winner is ${winner} ` : ""}</h1>
      <div className="gamegrid">
        {grid.map((g, i) =>
          g.map((a, j) => (
            <div
              className="cell"
              onClick={(e) => {
                if (winner) {
                  return;
                }
                if (grid[i][j] != "X" && grid[i][j] != "O") {
                  let temp = grid;
                  temp[i][j] = user;
                  setUser(user === "X" ? "O" : "X");
                  setGrid(temp);
                  if (isWinner(i, j)) {
                    setWinner(temp[i][j]);
                  }
                }
              }}
            >
              {<h4>{a}</h4>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
