function knightMoves(start, end) {
  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  function isOnBoard(square) {
    const x = square[0];
    const y = square[1];
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  }

  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      for (const square of path) {
        console.log(square);
      }
      return path;
    }

    for (const move of moves) {
      const next = [current[0] + move[0], current[1] + move[1]];

      if (!isOnBoard(next)) continue;
      if (visited.has(next.toString())) continue;

      visited.add(next.toString());
      queue.push([...path, next]);
    }
  }
}

module.exports = knightMoves;

const numbers = [2, 4, 6, 8];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
