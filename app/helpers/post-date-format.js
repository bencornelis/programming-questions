import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(postTime) {
  return ' on ' + moment(postTime).format('LL') + ' at ' + moment(postTime).format('LT'); 
});
