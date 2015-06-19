import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  accepted: DS.attr('boolean'),
  question: DS.belongsTo('question', {async: true})
});
