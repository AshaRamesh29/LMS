const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/lms'
mongoose.connect(uri,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true 
});