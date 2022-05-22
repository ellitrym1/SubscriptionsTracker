const mongoose = require("mongoose");
const { Schema } = mongoose;

const Subscription = require("./subscription");

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    subscriptions: {
        type: [Subscription],
        default: undefined,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
