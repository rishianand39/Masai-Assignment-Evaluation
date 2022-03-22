const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(
        'mongodb+srv://rishianand:1234@cluster0.nweui.mongodb.net/Authentication?retryWrites=true&w=majority'
    );
};

module.exports = connect;