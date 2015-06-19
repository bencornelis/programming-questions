import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.store.find('question', params.question_id);
  }
});
