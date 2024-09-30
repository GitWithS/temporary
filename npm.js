//  npm is node package manager
// it enables us to use our own code in other projects 
// use code written by other developers
// enables us to share our code with other developers
// npm prohject is hosted at npm.js.com
// npm calls reusable code a package and package is a folder that contains a javascrpt code
// package, depndency and module are same
// we can intall package as local dependency - can use this particularly in this project
// npm i <packageName>

// global depndency - can be used in any project
// npm install -g <pakageName>
// package.json - manifest file(stores imp info about out project)
// three ways to creating package.json
// manual approach (create package.json in the root)
// npm init (step by step, press enter to skip)
// npm init -y (everything defoult)
// some dependencies will going to use more dpendency and they will be automatically installed

// in order to use a module , we will first set up variable and calling the variabke
// always first install the depnedency first
 
const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
