const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema - a representation of a plan or theory in the form of an outline or model
const IdeaSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  details:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

mongoose.model('ideas', IdeaSchema);


