let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let answerSchema = new Schema({
  text: String,
  analysed_text_arr: [{
    index: String,
    word_in_text: String,
    root: String,
    word_without_starts: String,
    analysis: [String]
  }]
});

module.exports = mongoose.model('AnswerModel', answerSchema);
