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
            try {
                reciprocal(-5)
                reciprocal(1000001)
            } catch (error) {
                console.error('Number is out of range')
            }
        })
    })
})
