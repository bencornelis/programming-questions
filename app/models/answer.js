import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  accepted: DS.attr('boolean'),
  votes: DS.attr('number'),
  timestamp: DS.attr('date'),
  author: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})
});
