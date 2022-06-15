const mongoose = require("mongoose");

//env
const userName = process.env['user'] 
const password = process.env['password']
const cluster = process.env['hostname']


function mongoConnect()
{
    // mongoose.connect(`mongodb+srv://${user}:${password}@${cluster}/?retryWrites=true&w=majority`,
    mongoose.connect('mongodb+srv://alex:Testtest25@dbalex.znjfh.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
    );
}


test = (req, res) =>{
    mongoConnect();
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");

        //connect to db 

        var myObject = mongoose.Schema({name : String , country : String , continent : String , population : String})

        var user = mongoose.model('test', myObject, 'user');

        var user1 = new user({ name: 'Nice', country : 'fr' , continent : 'EUR' , population : '1.0' });

        user1.save(function (err, book) {
            if (err) return console.error(err);
            console.log(user1.name + " saved to user");
          });
    });

}

module.exports = {test}