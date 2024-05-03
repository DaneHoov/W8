const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;
  describe("Word constructor function", function () {
    this.beforeEach(() => {
      word = new Word("word")
    })

    it('should have a "word" property', function () {
      expect(word).to.have.property("word")
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.eql("word")
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let expected = word.removeVowels()
      expect(expected).to.eql("wrd")
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let expected = word.removeConsonants()
      expect(expected).to.eql('o')
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let expected = word.pigLatin()
      expect(expected).to.eql("ordway")
    });
  });
});
