const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.2mzdkub.mongodb.net/user?retryWrites=true&w=majority')
.then(() => {
    console.log("connection successfully")
}).catch((err) => {
    console.log("no connection")
});