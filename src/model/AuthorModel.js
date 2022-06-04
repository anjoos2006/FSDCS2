const mongoose = require('mongoose');
const dbUrl= 'mongodb+srv://admin:Admin1234@cluster0.864fo.mongodb.net/Library?retryWrites=true&w=majority';

mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("MongoDB connected"))
.catch(err => console.log(err));  //**CS2 **/

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;