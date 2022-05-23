const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
    name: String,
    paymentDate: String,
    paymentFrequency: String,
    amount: String,
});

// const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = subscriptionSchema;
