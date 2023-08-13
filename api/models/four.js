
const mongoose = require('mongoose');

const fourSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
        client_id: { type: String, required: true },
        client_secret: { type: String, required: true },
        section:{ type: String},
        near: { type: String },
        v: { type: String},
        radius:{ type: String},
        limit:{ type: String}
      
    
});

module.exports = mongoose.model('Four', fourSchema);

