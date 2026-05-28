const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    priority: String
});

module.exports = mongoose.model('Task', TaskSchema);