test("Point exists", 1, function() {
  ok(Point, "Identifier Point is defined");
});

test("Point instances", 1, function() {
  var point = new Point()
  ok(point instanceof Point, "Point is an instance of Point");
});

test("Point(x, y)", 2, function() {
  var point = new Point(5, 15)
  // actual, expected, message
  equal(point.x, 5, "Point instances exposes an x property");
  equal(point.y, 15, "Point instances exposes an y property");
});

test("Point instance properties are read-only", 4, function() {
  var point = new Point(5, 15)
  equal(point.x, 5, "Point.x initial value equals expected value");
  equal(point.y, 15, "Point.y initial value equals expected value");
  point.x = 7;
  equal(point.x, 5, "Point.x initial value equals expected value");
  point.y = 25;
  equal(point.y, 15, "Point.y initial value equals expected value");
});

test("Point.prototype.square", 4, function() {
  var point = new Point(5, 15);
  var pointSquared = point.square();
  ok(Point.prototype.square, "Point implements square method");
  ok(pointSquared instanceof Point, "Square method returns point instances");
  equal(pointSquared.x, 5*5, "PointSquared.x value equals Point.x squared");
  equal(pointSquared.y, 15*15, "PointSquared.y value equals Point.y squared");
});