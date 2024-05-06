class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.isValid = false;

    // Triangle.triangles.push(this);
  }

  //   static triangles = [];

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidSideLengths() {
    if (
      this.side1 + this.side2 > this.side3 &&
      this.side1 + this.side3 > this.side2 &&
      this.side2 + this.side3 > this.side1
    ) {
      return true;
    }
    return false;
  }

  validate() {
    if (
      typeof this.side1 !== "number" ||
      typeof this.side2 !== "number" ||
      typeof this.side3 !== "number"
    ) {
      this.isValid = false;
      return;
    }

    let hasValidSideLengths = this.hasValidSideLengths();

    if (hasValidSideLengths) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  static getValidTriangles(...triangles) {
    return triangles.filter(
      (triangle) => triangle instanceof Triangle && triangle.isValid
    );
  }
}

module.exports = Triangle;
