const { expect } = require("chai");
const Triangle = require("../problems/triangle.js");

describe("Triangle class", () => {
  let side1 = 2;
  let side2 = 3;
  let side3 = 4;
  let triangle;
  let triangle2;
  let triangle3;
  let triangle4;
  let triangle5;

  beforeEach(() => {
    triangle = new Triangle(side1, side2, side3);
    triangle2 = new Triangle(1, 1, 3);
    triangle3 = new Triangle([1, 2, 3]);
    triangle4 = new Triangle(3, 3, 5);
    triangle5 = new Triangle("2", [3], 4);
    // side1 = triangle.side1
    // side2 = triangle.side2
    // side3 = triangle.side3
  });
  context("All Triangles", () => {
    it("should have 3 sides", () => {
      expect(triangle).to.have.property("side1", side1);
      expect(triangle).to.have.property("side2", side2);
      expect(triangle).to.have.property("side3", side3);

      expect(side1).to.be.a("number");
      expect(side2).to.be.a("number");
      expect(side3).to.be.a("number");
    });
  });

  describe("Constructor", () => {
    it("should set three sides as properties on instance", () => {});
  });

  describe("getPerimeter Instance Method", () => {
    it("should return perimeter of triangle", () => {
      expect(triangle.getPerimeter()).to.eql(9);
    });
  });

  describe("hasValidSideLengths", () => {
    it("should return true if it is a valid triangle", () => {
      expect(triangle.hasValidSideLengths()).to.be.true;
    });

    it("should return false if not a valid triangle", () => {
      const triangle2 = new Triangle(1, 1, 3);
      expect(triangle2.hasValidSideLengths()).to.be.false;
    });
  });

  describe("validate", () => {
    it("should add isValid property to triangle instance with value of true if triangle is valid", () => {
      expect(triangle.isValid).to.be.false;

      triangle.validate();

      expect(triangle.isValid).to.be.true;
    });
    it("should add isValid property to triangle instance with value of false if triangle is invalid", () => {
      expect(triangle3.isValid).to.be.false;

      triangle3.validate();
      expect(triangle3.isValid).to.be.false;
    });
  });

  describe("getValidTriangles Static Method", () => {
    // it("total triangles", () => {
    //   expect(Triangle.triangles).to.be.an("array");
    //   expect(Triangle.triangles).to.have.lengthOf(5);
    // });

    it("should return all valid triangles", () => {
      triangle.validate(); //true
      triangle2.validate(); //false
      triangle3.validate(); //false
      triangle4.validate(); //true
      triangle5.validate(); //false
      let validTriangles = Triangle.getValidTriangles(
        triangle,
        triangle2,
        triangle3,
        triangle4,
        triangle5
      );
      expect(validTriangles).to.be.an("array");
      expect(validTriangles).to.have.lengthOf(2);
    });
  });
});
