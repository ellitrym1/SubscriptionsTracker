const mongoose = require("mongoose");
const { schema } = mongoose;

import Subscription from "./subscription";

const userSchema = new schema({
    username: String,
    email: String,
    password: String,
    subscriptions: {
        type: [Subscription],
        default: undefined,
    },
});

const User = mongoose.model("User", userSchema);
