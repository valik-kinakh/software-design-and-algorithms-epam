class Point {
    // fields of Point class
    x: number;
    y: number;

    // default
    constructor();
    // // parameterized constructor
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0
    }

    // calculates distance between 2 points
    private calculateDistance(x1: number, y1: number, x2: number, y2: number):number {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    public toString(): string {
        return `(${this.x}, ${this.y})`
    }

    // overloaded distance method
    public distance();
    public distance(x: Point);
    public distance(x: number, y: number);

    // distance method implementation
    public distance(x?: Point | number, y?: number): number {
        let result;
        if (!x && !y) {
            result = this.calculateDistance(this.x, 0, 0, this.y);
        } else if (x instanceof Point) {
            result = this.calculateDistance(x.x, x.y, this.x, this.y);
        }else {
            result = this.calculateDistance(this.x, this.y, x, y);
        }
        return result;
    }

}

export default Point;
