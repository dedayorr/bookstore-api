const mongoose = require("mongoose");

const DBconnect = () => {
    return mongoose.connect(process.env.MONGO_URL);
}

module.exports = DBconnect;