const x = 13;
if(x < 13){
    console.log(`small number`)
} else{
    console.log('large number')
}
console.log('its my first code!!!')


// globals--- no window, no dom. these variables are accessible everywhere; 

// global variables can be accessed anywhere
//__dirname - path to current directory
// __filename - file name
// require - function to use modules(commonJS)
// module - info about current module(file)
// process - info about env where the program is being executed
// console.log(__dirname)

// setInterval() is a function in JavaScript that is used to repeatedly execute a given function at a specified interval. It takes two arguments: the first argument is the function to be executed, and the second argument is the time interval (in milliseconds) between each execution.

// setInterval(( )=> {
//     console.log('hwlooo')
// },1000)

// console.log(process)


// setTimeout is a function that allows you to execute a specified piece of code after a set delay.
// it executes only at once
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  setTimeout(greet, 5000, "John"); // This will print "Hello, John!" after 2 seconds

  console.log('after set interval')

  //  modules are used to split code in multiple files