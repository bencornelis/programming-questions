import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    addAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        text: this.get('text'),
        author: this.get('author'),
        accepted: false,
        votes: 0,
        timestamp: new Date()
      })

      var question = this.get('controllers.question.model');
      question.get('answers').addObject(newAnswer);

      newAnswer.save().then(function() {
        return question.save();
      });

      this.transitionToRoute('question');
    }
  }
});
