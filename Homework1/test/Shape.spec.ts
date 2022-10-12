// @ts-nocheck
import Shape from '../classes/shape';
import Point from "../classes/point";


describe('Shape', () => {
  const points = [new Point(0, 0), new Point(0, 3), new Point(4, 3)];

  it('should fail to be created with 2 points', () => {
    expect(() => new Shape([new Point(0, 0), new Point(0, 3)])).toThrow();
  });

  it('should show it\'s color and filled property', () => {
    expect(new Shape(points, 'blue', false).toString())
      .toBe('A Shape with color of blue and not filled. Points: (0, 0), (0, 3), (4, 3).');
    expect(new Shape(points, 'mustard', true).toString())
      .toBe('A Shape with color of mustard and filled. Points: (0, 0), (0, 3), (4, 3).');
  });

  it('should have default color and filled property', () => {
    expect(new Shape(points).toString()).toBe('A Shape with color of green and filled. Points: (0, 0), (0, 3), (4, 3).');
  });

  it('should calculate the perimeter', () => {
    expect(new Shape(points).getPerimeter()).toBe(12);
  });
});
