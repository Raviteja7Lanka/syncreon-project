const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        addressCode: { type: String, required: true },
        referenceNumber: { type: String, required: true, unique: true },
        countryCode: { type: String, required: true },
        customerCode: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('order', Order)