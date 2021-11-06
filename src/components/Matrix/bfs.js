let successors = (root, m) => {
  let connectedCells = [
    [root[0] - 1, root[1]],
    [root[0], root[1] - 1],
    [root[0] + 1, root[1]],
    [root[0], root[1] + 1],
  ];

  const validCells = connectedCells.filter(
    (cell) => cell[0] >= 0 && cell[0] < m.length && cell[1] >= 0 && cell[1] < m[0].length
  );
  console.log('valid cell', validCells);
  const successors = validCells.filter((cell) => m[cell[0]][cell[1]] === 1);
  return successors;
};

const buildPath = (traversalTree, to) => {
  let path = [to];
  let parent = traversalTree[to];
  while (parent) {
    path.push(parent);
    parent = traversalTree[parent];
  }
  return path.reverse();
};

export const bfs = (from, to, arr) => {
  console.log(from, to, arr);
  let traversalTree = [];
  let visited = new Set();
  let queue = [];
  queue.push(from);

  while (queue.length) {
    let subtreeRoot = queue.shift();
    visited.add(subtreeRoot.toString());
    if (subtreeRoot.toString() == to.toString()) return buildPath(traversalTree, to);

    for (let child of successors(subtreeRoot, arr)) {
      if (!visited.has(child.toString())) {
        traversalTree[child] = subtreeRoot;
        queue.push(child);
      }
    }
  }
};
