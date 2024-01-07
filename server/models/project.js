const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    projectName: {
        type: String,
        required: true
      },
      projectImage: {
        type: String,
        required: true
      },
    projectDescription: {
          type: Number,
          required: false,
        },
     projectDate: {
          type: Date,
          required: true
        },
        projectCategory:{
            type: String,
            enum:['cards','flyers','art'],
            required: true
        },
    available: {
      type: Boolean,
      default: true
        }
});
module.exports = mongoose.model('Project', projectSchema);