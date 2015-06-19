import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('tags');
  this.resource('new-question', {path: '/questions/ask'});
  this.route('question', {path: '/questions/:question_id'});
});

export default Router;
