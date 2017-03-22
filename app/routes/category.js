import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      category: params.category_id,
      categories: this.store.findAll('category'),
      posts: this.store.findAll('post').then(results => results.filter((post) => {return post.get('category') === params.category_id;}))
    });
  }
});
