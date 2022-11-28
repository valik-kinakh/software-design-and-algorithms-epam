import { WeightGraph } from "./WeightGraph";

interface Path {
  path: string[];
  distance: number;
}

interface IDijkstra<T> {
  findShortestPath(vertex1: T, vertex2: T): Path;
  findAllShortestPaths(vertex: T): Record<string, Path>;
}

export class Dijkstra {
  graph: WeightGraph;

  constructor(graph: WeightGraph) {
    this.graph = graph;
  }

  findShortestPath(start: string, finish: string): Path {
    const adjacenyList = this.graph.adjacenyList;

    let nextVertex: string = finish;
    const arrayWithVertex: string[] = [];
    let weigth = 0;

    while (nextVertex !== start) {
      let minWeigth: number = Number.MAX_VALUE;
      let minVertex: string = "";
      adjacenyList[nextVertex].forEach((i, index) => {
        if (
          adjacenyList[i.node][index] &&
          i.weight + adjacenyList[i.node][index].weight < minWeigth
        ) {
          minWeigth = adjacenyList[i.node][index].weight;
          weigth += minWeigth;
          minVertex = i.node;
        }
      });
      arrayWithVertex.push(minVertex);
      nextVertex = minVertex;
    }
    return {
      path: [...arrayWithVertex, finish],
      distance: weigth,
    };
  }
}
