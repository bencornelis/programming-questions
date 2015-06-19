import Ember from 'ember';

export default Ember.Controller.extend({
  navItems: [
    Ember.Object.create({
      route: 'questions',
      name: 'Questions',
      isSelected: true
    }),
    Ember.Object.create({
      route: 'tags',
      name: 'Tags'
    }),
    Ember.Object.create({
      route: 'new-question',
      name: 'Add Question'
    })
  ]
});
