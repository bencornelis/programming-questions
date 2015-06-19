import Ember from 'ember';

export default Ember.Controller.extend({
  navItems: [
    {
      route: 'questions',
      name: 'Questions'
    },
    {
      route: 'tags',
      name: 'Tags'
    },
    {
      route: 'new-question',
      name: 'Add Question'
    }
  ]
});
