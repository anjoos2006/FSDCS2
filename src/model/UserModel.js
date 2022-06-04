// ** CS2 P2 ** New module created to include a new collection to store signed up data
const mongoose = require('mongoose');
const dbUrl= 'mongodb+srv://admin:Admin1234@cluster0.864fo.mongodb.net/Library?retryWrites=true&w=majority';

mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("MongoDB connected"))
.catch(err => console.log(err));  //**CS2 **/

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    uid : {
        type: String,
        required: true,
        index: {unique:true}
    },
    pwd: {
        type: String,
        required: true
    }
});
// Schema.createIndex({"uid":1})

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;