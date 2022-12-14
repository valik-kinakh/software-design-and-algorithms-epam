import { Vertex } from "./classes/Vertex";
import { Edge } from "./classes/Edge";
import { WeightGraph } from "./classes/WeightGraph";
import { Dijkstra } from "./classes/Dijkstra";

const vertex1 = new Vertex("1");
const vertex2 = new Vertex("2");
const vertex3 = new Vertex("3");
const vertex4 = new Vertex("4");

const vertices = [vertex1, vertex2, vertex3, vertex4];

const edges = [
  new Edge(vertex1, vertex4, 3),
  new Edge(vertex1, vertex2, 5),
  new Edge(vertex1, vertex3, 4),
  new Edge(vertex2, vertex4, 6),
  new Edge(vertex2, vertex3, 5),
];

const graph = new WeightGraph();

vertices.forEach((verticle) => graph.addVertex(verticle.name));
edges.forEach((edge) => graph.addEdge(edge.from, edge.to, edge.weight));

const dijkstra = new Dijkstra(graph);

console.log(dijkstra.findShortestPath(vertex4.name, vertex3.name));

console.log(dijkstra.findAllShortestPaths(vertex4.name));
