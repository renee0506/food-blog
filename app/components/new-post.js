import Ember from 'ember';

export default Ember.Component.extend({
  formShow: false,
  actions: {
    savePost() {
      var params={
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        content: this.get('content'),
        category: this.get('category')
      };
      this.set('formShow', false);
      this.sendAction('savePost', params);
    },

    showPostForm() {
      this.set('formShow', true);
    }
  }
});
