import { WeightGraph } from "./WeightGraph";

interface Path {
  path: string[];
  distance: number;
}

interface IDijkstra<T> {
  findShortestPath(vertex1: T, vertex2: T): Path;
  findAllShortestPaths(vertex: T): Record<string, Path>;
}

interface GraphNode {
  name: string;
  nodes: {
    node: string;
    weight: number;
  }[];
}

export class Dijkstra implements IDijkstra<string> {
  graph: WeightGraph;

  constructor(graph: WeightGraph) {
    this.graph = graph;
  }

  findShortestPath(start: string, finish: string): Path {
    const adjacenyList = this.graph.adjacenyList;
    const startNode = { name: start, nodes: adjacenyList[start] };
    const endNode = { name: finish, nodes: adjacenyList[finish] };

    const smallestWeights = new Map<string, number>();
    smallestWeights.set(start, 0);

    const prevNodes = new Map<string, GraphNode>();

    const nodesToVisitQueue: GraphNode[] = [];
    const visitedNodes = new Set<string>();

    visitedNodes.add(start);

    let currentNode = startNode;

    while (true) {
      const dist = smallestWeights.get(currentNode.name)!;
      const childNodes = currentNode.nodes;

      childNodes.forEach(({ node, weight }) => {
        const thisNode = { name: node, nodes: adjacenyList[node] };

        if (!visitedNodes.has(node)) {
          nodesToVisitQueue.push(thisNode);
        }

        const thisDist = dist + weight;

        if (prevNodes.has(node)) {
          const altDist = smallestWeights.get(node)!;

          if (thisDist < altDist) {
            prevNodes.set(node, currentNode);
            smallestWeights.set(node, thisDist);
          }
        } else {
          prevNodes.set(node, currentNode);
          smallestWeights.set(node, thisDist);
        }
      });

      visitedNodes.add(currentNode.name);

      if (nodesToVisitQueue.length === 0) {
        break;
      }

      currentNode = nodesToVisitQueue.shift()!;
    }

    const path: GraphNode[] = [];

    currentNode = endNode;
    while (currentNode !== startNode) {
      path.push(currentNode);

      currentNode = prevNodes.get(currentNode.name)!;
    }
    path.push(startNode);

    path.reverse();
    const cost = smallestWeights.get(endNode.name)!;

    return {
      distance: cost,
      path: Object.values(path).map((el) => el.name),
    };
  }

  findAllShortestPaths(vertex: string): Record<string, Path> {
    const adjacenyList = this.graph.adjacenyList;
    const allPaths = {};

    const filterVertexes = Object.keys(adjacenyList).filter(
      (key) => key !== vertex
    );

    for (const el of filterVertexes) {
      allPaths[el] = this.findShortestPath(vertex, el);
    }

    return allPaths;
  }
}
