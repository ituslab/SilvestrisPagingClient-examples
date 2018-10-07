const express = require("express")
const app = express()



app.use('/dist/',express.static(__dirname + '/dist/'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(8000 , ()=> console.log('listening on 8000'))
