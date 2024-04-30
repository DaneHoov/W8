const Employee = require('./employee.js')

const john = new Employee("John Wick", "Dog Lover")

// setTimeout(john.sayName, 2000);

// let johnSaysHello = john.sayName.bind(john)
// setTimeout(johnSaysHello, 2000);

// setTimeout(john.sayOccupation, 3000)

let johnOcc = john.sayOccupation.bind(john)
setTimeout(johnOcc, 3000)
