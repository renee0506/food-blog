import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShow: false,
  actions: {
    showUpdateForm() {
      this.set('updateFormShow', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        content: this.get('content'),
        category: this.get('category')
      };
      this.set('updateFormShow', false);
      this.sendAction('update', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this rental?')){
        this.sendAction('delete', post);
      }
    }
  }
});
