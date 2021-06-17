const app = require('express')();
const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost:27017/premest",{ useNewUrlParser: true, useUnifiedTopology: true }).then(res=>console.log('mongodb connected'))

app.listen(3001,function(){
    console.log('server connected')
})
