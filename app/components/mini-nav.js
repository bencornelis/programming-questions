import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click: function(item) {
      $("#mini-nav li").removeClass('selected')
      $("#" + item.route).addClass('selected');
      this.get('currentController').transitionToRoute(item.route);
    }
  }
});
