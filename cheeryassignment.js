const express = require('express');

const app = express()

app.get ("",(req,res)=>{
    
    
res.send("<h1>Hello Sir WinHtut Using Node.js</h1>");

})
app.get("/about",(req,res)=>{
    res.send({
        Name:"Cherry Phyo", 
        Hobby:"sleeping and eating"
    })

})

app.get("/cherryphyo",(req,res)=>{
    
    res.send("<h1>This is from Cherry Phyo Page</h1>");

})

app.get("/yawmu",(req,res)=>{
    res.send("<h1>Hello stupid yawmu</h1>");
})

app.listen(5000,()=>{
    console.log('Server starting up at: port:5000:');
})
