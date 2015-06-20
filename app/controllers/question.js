import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.set('helpfulLinks', [])
  },
  collectHelpfulLinks: function() {
    if (this.get('helpfulLinks.length') > 0) {
      this.set('helpfulLinks', []);
    }

    var question = this.get('model');

    //build the search url
    //sort by relevance with the question as search text,
    //only pull questions with accepted answers
    //look for questions with the same tags
    var searchText = question.get('title').replace(/ /g, '+');
    searchText.replace('?', '%3F');
    var url = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&accepted=True&site=stackoverflow";
    url += "&q=" + searchText;
    url += "&tagged=";
    question.get('tags').forEach(function(tag) {
      if (tag.get('name')) {
        url += tag.get('name').replace('-', '.') + ";";
      }
    });
    url = url.slice(0, -1);

    //get the links from stack overflow
    var helpfulLinks = this.get('helpfulLinks');
    Ember.$.getJSON(url).then(function(responseJSON) {
      responseJSON.items.slice(0,3).forEach(function(item) {
        var i = item.link.lastIndexOf('/') + 1;
        helpfulLinks.pushObject({
          link: item.link,
          name: item.link.slice(i).replace(/-/g, ' ')
        });
      });
    })

  }.observes('model'),
  isEditing: false,
  answerStatus: function() {
    var answers = this.get('model.answers');
    var answerCount = answers.get('length');
    if (answerCount === 1) {
      return answerCount + " Answer";
    } else {
      return answerCount + " Answers";
    }
  }.property('model.answers'),
  actions: {
    upvote: function() {
      var question = this.get('model');
      question.incrementProperty('votes');
      question.save();
    },
    downvote: function() {
      var question = this.get('model');
      question.decrementProperty('votes');
      question.save();
    },
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('questions');
    },
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.get('model').save();
    }
  }
});
