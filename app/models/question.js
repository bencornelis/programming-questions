import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  author: DS.attr('string'),
  votes: DS.attr('number'),
  views: DS.attr('number'),
  tags: DS.hasMany('tag', {async: true}),
  answers: DS.hasMany('answer', {async: true})
});
