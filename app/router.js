import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('tags');
  this.resource('new-question', {path: '/questions/ask'});
  this.resource('question', {path: '/questions/:question_id'}, function() {
    this.resource('new-answer', {path: '/answers/new'});
  });
});

export default Router;
