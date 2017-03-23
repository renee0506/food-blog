import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentFormShow: false,
  actions: {
    showUpdateCommentForm() {
      this.set('updateCommentFormShow', true);
    },
    hideCommentForm() {
      this.set('updateCommentFormShow', false);
    },
    updateComment(comment) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content')
      };
      this.set('updateCommentFormShow', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
