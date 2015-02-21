var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var skillSchema = new Schema({
  label: String,
  name: String,
  info: String,
  content: String
});

var Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;