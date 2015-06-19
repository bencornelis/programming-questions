import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  author: DS.attr('string'),
  upvotes: DS.attr('number'),
  tags: DS.hasMany('tag', {async: true}),
  answers: DS.hasMany('answer', {async: true})
});
