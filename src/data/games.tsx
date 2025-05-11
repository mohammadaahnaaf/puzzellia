import { Maze, Protractor, Thermometer, Sudoku, Wordle } from '@puzzellia/games'
import { Math } from '@puzzellia/games/math'

interface GameItem {
    title: string
    subtitle: string
    icon: string
    link: string
    cats: string[]
    gameia: React.ReactNode;
}

export const games: GameItem[] = [
  {
    title: "Thermometer",
    subtitle: "Guess the thermometer reading.",
    icon: "/icons/thermometer.svg",
    link: "thermometer",
    cats: ["measuring", "visual"],
    gameia: <Thermometer />,
  },
  {
    title: "Protractor",
    subtitle: "Guess the protractor reading.",
    icon: "/icons/protractor.svg",
    link: "protractor",
    cats: ["measuring", "visual"],
    gameia: <Protractor />,
  },
  {
    title: "Math",
    subtitle: "Lets find out your math knowlwdge.",
    icon: "/icons/math-2.svg",
    link: "math-game",
    cats: ["measuring", "number", "math"],
    gameia: <Math />,
  },
  {
    title: "Maze",
    subtitle: "Find the way out of the box.",
    icon: "/icons/maze.svg",
    link: "maze",
    cats: ["soduko", "line", "puzzle", "visual"],
    gameia: <Maze />,
  },
  {
    title: "Sudoku",
    subtitle: "Find the next number.",
    icon: "/icons/puzzle.svg",
    link: "sudoku",
    cats: ["soduko", "line", "puzzle", "visual"],
    gameia: <Sudoku />,
  },
  {
    title: "Number",
    subtitle: "Find the sequence of numbers.",
    icon: "/icons/math.svg",
    link: "number-game",
    cats: ["measuring", "number"],
    gameia: <Thermometer />,
  },
  {
    title: "Geomatry",
    subtitle: "Count the lines, angles in a shape.",
    icon: "/icons/measuring.svg",
    link: "geomatry-game",
    cats: ["measuring", "number", "visual", "line"],
    gameia: <Thermometer />,
  },
  {
    title: "Trigonomatry",
    subtitle: "Understand the pyramids of Egypt.",
    icon: "/icons/pyramid.svg",
    link: "trigonomatry-game",
    cats: ["math", "number", "visual", "line"],
    gameia: <Thermometer />,
  },
  {
    title: "Wordle",
    subtitle: "Make the word.",
    icon: "/icons/wordle.svg",
    link: "wordle-game",
    cats: ["word", "visual", "line"],
    gameia: <Wordle />,
  },
];