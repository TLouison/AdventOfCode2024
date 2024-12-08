const fs = require("fs");
// For this puzzle I think the best way to set this up is as a list of networks, each one with all
// of the same frequencies all connected to each other. We could store this as a dict of networks,
// and then parse through them all and store: 1) where the node is and 2) what edges it has. Each
// edge should contain the vertical and horizontal distance travelled to that node, and should be
// double-sided so that we know how far the antinodes should be from it from each side of the edge.
//
// Our solving algorithm should be something like:
// 1. Iterate over each network in the dictionary
// 2. Iterate over each node in the network
// 3. For each edge in the network, follow it, go that distance again, and see if the location is within the bounds.
//    If it is, +1 antinode. If not, continue.
//
// This should find all antinodes because each edge is double-sided, meaning we will attempt to find
// an antinode in each direction.
const INPUT_FILE_NAME = "input.txt";

type Graph = {
  maxX: number;
  maxY: number;
  networks: { [key: string]: GraphNode[] };
};

type EdgeWeight = {
  verticalDistance: number;
  horizontalDistance: number;
};

class GraphNode {
  network: string;
  x: number;
  y: number;
  edges: EdgeWeight[];

  constructor(network: string, x: number, y: number) {
    this.network = network;
    this.x = x;
    this.y = y;
    this.edges = [];
  }

  addEdge(edge: EdgeWeight) {
    this.edges.push(edge);
  }
}

function createOrUpdate(graph: Graph, node: GraphNode) {
  if (node.network in graph.networks) {
    // Create edges between all other pre-existing nodes
    for (var otherNode of graph.networks[node.network]) {
      // Create edges doing both directions so we can traverse however we need to
      node.addEdge({
        horizontalDistance: otherNode.x - node.x,
        verticalDistance: otherNode.y - node.y,
      });
      otherNode.addEdge({
        horizontalDistance: node.x - otherNode.x,
        verticalDistance: node.y - otherNode.y,
      });
    }

    // Insert node to the graph
    graph.networks[node.network].push(node);
  } else {
    graph.networks[node.network] = [node];
  }
}

function buildGraph(): Graph {
  let graph = {
    maxX: 0,
    maxY: 0,
    networks: {},
  };

  // Go line-by-line of the file to get all the towers
  let fileInput = fs.readFileSync(INPUT_FILE_NAME, "utf-8").trim().split("\n");

  graph.maxY = fileInput.length;
  graph.maxX = fileInput[0].length;

  fileInput.forEach((line, y) => {
    for (var x = 0; x < line.length; x++) {
      if (line[x] !== ".") {
        const newNode = new GraphNode(line[x], x, y);
        createOrUpdate(graph, newNode);
      }
    }
  });
  return graph;
}

function isOutOfBounds(graph: Graph, x: number, y: number): boolean {
  return x < 0 || x >= graph.maxX || y < 0 || y >= graph.maxY;
}

function findAntinodes(graph: Graph): number {
  var foundAntinodes: string[] = [];
  var antiNodes = 0;

  for (var networkIdentifier in graph.networks) {
    console.log("Looking at network", networkIdentifier);
    const network = graph.networks[networkIdentifier];
    for (const node of network) {
      // console.log(`Checking for antinodes from node (${node.x}, ${node.y})`);
      for (const edge of node.edges) {
        // console.log(
        //   `Checking edge with values ${edge.horizontalDistance}, ${edge.verticalDistance}. Related node should be at (${node.x + edge.horizontalDistance},${node.y + edge.verticalDistance})`,
        // );

        let antiNodeLocationX = node.x + edge.horizontalDistance * 2;
        let antiNodeLocationY = node.y + edge.verticalDistance * 2;
        const coordString: string = `${antiNodeLocationX},${antiNodeLocationY}`;

        if (
          !isOutOfBounds(graph, antiNodeLocationX, antiNodeLocationY) &&
          !foundAntinodes.includes(coordString)
        ) {
          // console.log(
          //   `Network ${networkIdentifier}: Got antinode at (${antiNodeLocationX}, ${antiNodeLocationY})`,
          // );
          antiNodes++;
          foundAntinodes.push(coordString);
        }
      }
    }
  }

  return antiNodes;
}

const graph = buildGraph();
console.log(findAntinodes(graph));
