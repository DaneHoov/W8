const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe('returnsThree function', function() {
    // let num = 3
    it("should return 3", function () {
        let expected = returnsThree()
        expect(expected).to.eql(3)

    })
})

describe('reciprocal function', function () {
    context('Valid argument', function(){
        it('should return the reciprocal of n', function(){
            expect(reciprocal(3)).to.eq(1/3)
            expect(reciprocal(4, 7, 10)).to.eq(1/4)
        })
    })

    context('Invalid argument', function(){
        it('should throw error if n is not between 1-1000000', function() {
            // let bound1 = reciprocal.bind(null, -1)
            // let bound2 = reciprocal.bind(null, 10000001)

            // expect(bound1).to.throw(RangeError)
            // expect(bound2).to.throw(RangeError)
            expect(() => reciprocal(-1)).throw(RangeError)
            expect(() => reciprocal(1000001)).throw(RangeError)
        })
    })
})
