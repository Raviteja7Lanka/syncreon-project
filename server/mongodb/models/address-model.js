const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Address = new Schema(
    {
        addressCode: { type: String, required: true, unique: true },
        customerCode: { type: String, required: true },
        name: { type: String, required: true },
        type: { type: String, required: true },
        line1: { type: String, required: true },
        line2: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('address', Address)