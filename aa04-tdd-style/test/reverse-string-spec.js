const { expect } = require('chai')

const reverseString = require('../problems/reverse-string.js');

describe ("reverseString function", function() {
    let string = "fun";
    it("should return a reversed string", function() {
        let expected = reverseString(string)
        expect(expected).to.eql("nuf")
    })
})
