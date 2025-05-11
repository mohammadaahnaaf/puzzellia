"use client";

import React, { useState } from "react";

const GRID_SIZE = 10;

const createEmptyGrid = () =>
  Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(""));

export function Wordle() {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [currentTurn, setCurrentTurn] = useState<"player" | "computer">(
    "player"
  );
  const [selectedLetter, setSelectedLetter] = useState("");
  const [position, setPosition] = useState({ row: 0, col: 0 });
  const [validWords, setValidWords] = useState<string[]>([]);

  const validateWord = async (word: string): Promise<boolean> => {
    if (word.length < 2) return false;
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_WORDLE_API_URL
        }/api/v2/entries/en/${word.toLowerCase()}`
      );
      return response.ok;
    } catch {
      return false;
    }
  };

  const checkForWords = async (newGrid: string[][]) => {
    // Check rows
    for (let row = 0; row < GRID_SIZE; row++) {
      const line = newGrid[row].join("");
      const words = line.match(/[A-Z]{2,}/g);
      if (words) {
        for (const word of words) {
          if (await validateWord(word)) {
            setValidWords((prev) => [...prev, word]);
          }
        }
      }
    }

    // Check columns
    for (let col = 0; col < GRID_SIZE; col++) {
      let columnStr = "";
      for (let row = 0; row < GRID_SIZE; row++) {
        columnStr += newGrid[row][col];
      }

      const words = columnStr.match(/[A-Z]{2,}/g);
      if (words) {
        for (const word of words) {
          if (await validateWord(word)) {
            setValidWords((prev) => [...prev, word]);
          }
        }
      }
    }
  };

  const placeLetter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { row, col } = position;
    if (!selectedLetter.match(/^[A-Za-z]$/)) {
      alert("Enter a single letter.");
      return;
    }

    const newGrid = [...grid.map((r) => [...r])];
    if (newGrid[row][col] !== "") {
      alert("Cell already filled.");
      return;
    }

    newGrid[row][col] = selectedLetter.toUpperCase();
    setGrid(newGrid);
    setSelectedLetter("");
    await checkForWords(newGrid);

    setCurrentTurn("computer");
    setTimeout(() => {
      computerMove(newGrid);
      setCurrentTurn("player");
    }, 1000);
  };

  const computerMove = (grid: string[][]) => {
    const newGrid = [...grid.map((r) => [...r])];
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (newGrid[r][c] === "") {
          const randomLetter = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
          newGrid[r][c] = randomLetter;
          setGrid(newGrid);
          return;
        }
      }
    }
  };

  const handleCellClick = (row: number, col: number) => {
    setPosition({ row, col });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto w-full">
      <h1 className="text-xl font-bold mb-4 text-pink-600">🧩 Wordle</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="grid">
          <div className="grid grid-cols-10 gap-1 justify-center">
            {grid.map((row, rowIndex) =>
              row.map((letter, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  className={`h-10 ring-1 ring-pink-200 text-xl flex items-center justify-center 
                ${
                  position.row === rowIndex && position.col === colIndex
                    ? "bg-pink-200"
                    : "bg-white"
                } 
                hover:bg-pink-200 duration-300 cursor-pointer`}
                >
                  {letter}
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 ring-2 ring-pink-300 bg-pink-50 text-pink-600 rounded-md">
          <h2 className="text-lg font-semibold text-center">Valid Words</h2>
          {validWords.map((word, index) => (
            <div key={word}>
              {index + 1}. {word}
            </div>
          ))}
        </div>
      </div>

      {currentTurn === "player" && (
        <form onSubmit={placeLetter} className="flex items-center gap-2">
          <input
            type="text"
            maxLength={1}
            value={selectedLetter}
            onChange={(e) => setSelectedLetter(e.target.value.toUpperCase())}
            placeholder="Letter"
            className="border-none focus:outline-none ring-2 ring-pink-300 focus:border-0 rounded-md p-2 w-20 text-center"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
          >
            Place
          </button>
          <span>
            Selected Cell: ({position.row}, {position.col})
          </span>
        </form>
      )}

      {currentTurn === "computer" && (
        <p className="mt-4 text-pink-600">🤖 Computer is thinking...</p>
      )}
    </div>
  );
}
