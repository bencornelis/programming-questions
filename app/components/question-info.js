import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: function() {
    return this.get('question.answers.length');
  }.property('question.answers'),
  textSnippet: function() {
    return this.get('question.text').slice(0, 20) + "...";
  }.property('question.text'),
  authorDescription: function() {
    return 'asked by ' + this.get('question.author');
  }.property('question.author')
});
