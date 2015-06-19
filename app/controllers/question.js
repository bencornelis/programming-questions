import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  answerStatus: function() {
    var answers = this.get('model.answers');
    var answerCount = answers.get('length');
    if (answerCount === 1) {
      return answerCount + " Answer";
    } else {
      return answerCount + " Answers";
    }
  }.property('model.answers'),
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
    },
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.get('model').save();
    }
  }
});
