function Point(x, y) {
  Object.defineProperties(this, {
    x: { value: x, writable: false },
    y: { value: y, writable: false }
  });
}

Point.prototype.square = function() {
  return new Point(this.x * this.x, this.y * this.y);
};