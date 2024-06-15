const mongoose = require('mongoose');

const AdminLogin = new mongoose.Schema({
    username: {
        type:String
    },
    password: {
        type:String
    }
});

AdminLogin.method.correctPassword = async function(dbpassword,enterpassword){
    return await bcrypt.compare(dbpassword,enterpassword);
};

module.exports = mongoose.model('Admin',AdminLogin);