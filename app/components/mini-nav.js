import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click: function(clickedItem) {
      // $("#mini-nav li").removeClass('selected')
      // $("#" + item.route).addClass('selected');
      this.get('items').forEach(function(item) {
        item.set('isSelected', false);
      })
      clickedItem.set('isSelected', true);
      this.get('currentController').transitionToRoute(clickedItem.route);
    }
  }
});
