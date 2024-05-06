const { expect } = require("chai");
const Person = require("../problems/person.js");

describe("Person class", function () {
  let dane;
  let andrew;

  beforeEach(() => {
    dane = new Person("dane", 31);
    andrew = new Person("andrew", 28);
  });

  it("should be an instance of the Person class", function () {
    expect(dane).to.be.instanceOf(Person);
  });

  it("constructor should take in parameters of name and age", function () {
    expect(dane.name).to.eql("dane");
    expect(dane.age).to.eql(31);
  });

  describe("sayHello Instance Method", function () {
    it("should return a string of persons name and a greeting message", function () {
      expect(dane.sayHello()).to.eql(`Hello my name is dane`);
    });
  });

  describe("visit Instance Method", () => {
    it("should return a string saying person1 visited person2", () => {
      expect(dane.visit(andrew)).to.eql("dane visited andrew");
    });
  });

  describe("switchVisit Instance Method", () => {
    it("should invoke visit function of parameter otherPerson passing in current instance as arg", () => {
      expect(dane.switchVisit(andrew)).to.eql("andrew visited dane");
    });
  });

  describe("update Instance Method", () => {
    context("Argument is a valid object", () => {
      let isaiah = { name: "isaiah", age: 30 };
      let alex = ["alex", 31];

      it("should update instance if argument is an object", () => {
        // let newGuy = andrew.update(isaiah)
        expect(() => andrew.update(isaiah)).to.not.throw();
        // expect(() => dane.update(alex)).to.throw()
      });
    });
    context("Argument is an invalid object", () => {
      it("should throw a TypeError if argument is not an object", () => {
        expect(() => dane.update("invalid")).to.throw(
          TypeError,
          "argument must be an object"
        );
      });
    });
  });
});
