const mongoose = require("mongoose");
const { schema } = mongoose;

const subscriptionSchema = new schema({
    name: String,
    paymentDate: Date,
    paymentFrequency: String,
    amount: String,
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
