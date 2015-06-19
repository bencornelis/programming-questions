import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
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
