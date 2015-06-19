import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    upvote: function() {
      var question = this.get('model');
      question.incrementProperty('votes');
      question.save();
    },
    downvote: function() {
      var question = this.get('model');
      question.decrementProperty('votes');
      question.save();
    },
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('questions');
    }
  }
});
