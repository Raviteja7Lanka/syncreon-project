const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderContent = new Schema(
    {
        referenceNumber: { type: String, required: true },
        itemNumber: { type: String, required: true },
        itemDescription: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('ordercontent', OrderContent)