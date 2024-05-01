const { expect } = require('chai')

const User = require('../class/user.js')

describe ('User class', function () {
    let user;

    this.beforeEach(() => {
        user = new User("the_hoov");
    });

    it('should create successfully', function () {
        // let user = new User();
        expect(user).to.exist;
    });

    it('should set username on creation', function () {
        // let user = new User("the_hoov")
        expect(user.username).to.equal("the_hoov")
    })
})
