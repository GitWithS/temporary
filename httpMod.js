const http = require('http');   // htt is mod name

// creating server
// it takes two premiers request and resonpse
// ist para is incoming request, from browser to web page
// response is what we are sending back
// both premers are objects
// for home page we use /

const server = http.createServer((req, res)=>{
    // url property at what point client is requesting
    if(req.url === '/'){
        res.end('Welsome to home page')
        
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
        <h1>OOpsss!!!!<h1>
        <p> wr can't find page you are looking for<p>
        <a href="/">back home </a>
        `)
    // res.end
    // console.log(req) // req is a giant object
    // res.write()
    // res.end() // t end our response

})
server.listen(5000)


// I am making my first change