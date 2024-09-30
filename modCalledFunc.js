
// setting up module will always start from './'(dot)
const names = require('./modNames');
const sayHi =require('./modFunc');
const data = require('./6_alternate_flavours')
console.log(data)
console.log(names)

// idf we have a function inside a module , it can invokeed without assigning a variable
require('./7_mind_grinade')

// sayHi('susan')
// sayHi(john) // this will gice reference error- john no defined
// sayHi(names.john)
// sayHi(names.peter)