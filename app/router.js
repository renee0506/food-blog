import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', {path: '/post/:post_id'});
  this.route('about');
  this.route('contact');
  this.route('category', {path: '/category/:category_id'});
});

export default Router;
