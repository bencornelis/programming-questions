import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.set('selectedTags', [])
  },
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        text: this.get('text'),
        author: this.get('author'),
        votes: 0,
        views: 0
      });
      this.get('selectedTags').forEach(function(tag) {
        newQuestion.get('tags').pushObject(tag);
      });
      newQuestion.save();

      this.transitionToRoute('questions')
    },
    addTag: function(tag) {
      this.get('selectedTags').pushObject(tag);
      $("#" + tag.get('name')).addClass('selected-tag');
    }
  }
});
