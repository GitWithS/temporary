// MODULES
// CommonJS(it's libarary that node uses), every file is module(by default)
// Modules - Encapsulated code (only share minimum)
// local
const secret = 'Super Secret'
const john = 'john'
const peter = 'peter'

const sayHi = (name)=>{
    console.log(`Hello there ${name}`);

}
sayHi('susan')
sayHi(john)
sayHi(peter)