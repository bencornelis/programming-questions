import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: function() {
    return this.get('question.answers.length');
  }.property('question.answers'),
  textSnippet: function() {
    return this.get('question.text').slice(0, 10) + "...";
  }.property('question.text')
});
