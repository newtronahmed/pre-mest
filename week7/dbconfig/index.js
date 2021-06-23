const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost:27017/premest",{ useNewUrlParser: true, useUnifiedTopology: true }).then(res=>console.log('mongodb connected'))
module.exports = mongoose;