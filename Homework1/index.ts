import Point from "./classes/point";
import Triangle from "./classes/triangle";

const point = new Point(0,4);
const point1 = new Point(3,0);
const point2 = new Point(0,0);

const triangle = new Triangle([point,point1,point2]);


// example of using Triangle class
console.log(`
${triangle.toString()}
Perimeter: ${triangle.getPerimeter()}
Type: ${triangle.getType()}
`);
