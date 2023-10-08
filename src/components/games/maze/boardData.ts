export type Cell = boolean;

// MazeGenerator.ts
export class MazeGenerator {
  private rows: number;
  private cols: number;
  private grid: Cell[][];
  private visited: boolean[][];

  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.grid = this.initializeGrid();
    this.visited = this.initializeVisited();
  }

  private initializeGrid(): Cell[][] {
    const grid: Cell[][] = [];
    for (let i = 0; i < this.rows; i++) {
      grid.push(Array(this.cols).fill(true));
    }
    return grid;
  }

  private initializeVisited(): boolean[][] {
    const visited: boolean[][] = [];
    for (let i = 0; i < this.rows; i++) {
      visited.push(Array(this.cols).fill(false));
    }
    return visited;
  }

  public generateMaze(): Cell[][] {
    const stack: [number, number][] = [];
    const startRow = Math.floor(Math.random() * this.rows);
    const startCol = Math.floor(Math.random() * this.cols);

    const isInside = (row: number, col: number): boolean => row >= 0 && row < this.rows && col >= 0 && col < this.cols;

    stack.push([startRow, startCol]);
    this.visited[startRow][startCol] = true;

    const directions: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right

    while (stack.length > 0) {
      const [currentRow, currentCol] = stack[stack.length - 1];
      const neighbors: [number, number, number, number][] = [];

      for (const [dr, dc] of directions) {
        const newRow = currentRow + dr * 2;
        const newCol = currentCol + dc * 2;

        if (isInside(newRow, newCol) && !this.visited[newRow][newCol]) {
          const wallRow = currentRow + dr;
          const wallCol = currentCol + dc;

          if (isInside(wallRow, wallCol)) {
            neighbors.push([newRow, newCol, wallRow, wallCol]);
          }
        }
      }

      if (neighbors.length === 0) {
        stack.pop(); // backtrack
      } else {
        const [nextRow, nextCol, wallRow, wallCol] = neighbors[Math.floor(Math.random() * neighbors.length)];

        this.grid[wallRow][wallCol] = false; // remove wall
        this.visited[nextRow][nextCol] = true;

        stack.push([nextRow, nextCol]);
      }
    }

    return this.grid;
  }
}

// MazeSolver.ts
export class MazeSolver {
  private maze: Cell[][];

  constructor(maze: Cell[][]) {
    this.maze = maze;
  }

  public solveMaze(): [number, number][] {
    // Implement your maze solving algorithm (e.g., depth-first search, A*, etc.)
    // Return a path as an array of [row, col] coordinates representing the solution path
    // This is a placeholder, you need to implement the actual solving logic
    const startRow = 0;
    const startCol = 0;
    const endRow = this.maze?.length - 1;
    const endCol = this.maze[0]?.length - 1;
    return [[startRow, startCol], [endRow, endCol]];
  }
}