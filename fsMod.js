// const {readFilesSync} = require('fs') 
// above is same as const fs = require('fs')
//                   fs.read
const {readFilesSync, writeFileSync} = require('fs') 
const first = readFilesSync('./output/text.txt','utf8')
const second = readFilesSync('./output/second.txt','utf8')
comsole.log(first,second)

writeFileSync(
    './content/result-sync.txt',
    `here's is the result : ${first}, ${second}`,
    {flag: 'a'}
)