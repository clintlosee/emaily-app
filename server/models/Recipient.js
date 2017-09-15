const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

export default recipientSchema;
