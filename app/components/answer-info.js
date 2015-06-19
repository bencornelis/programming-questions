import Ember from 'ember';

export default Ember.Component.extend({
  authorDescription: function() {
    return 'answered by ' + this.get('answer.author');
  }.property('answer.author'),
  actions: {
    upvote: function() {
      var answer = this.get('answer');
      answer.incrementProperty('votes');
      answer.save();
    },
    downvote: function() {
      var answer = this.get('answer');
      answer.decrementProperty('votes');
      answer.save();
    }
  }
});
