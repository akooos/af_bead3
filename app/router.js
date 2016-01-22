import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  
  this.route("error404", { path: "/*path"});

this.route("users/signin", {path:"/"});

  this.route('users', function() {
    this.route('signup');
    this.route('signin');
    this.route('list');
    this.route('list',{path:'/'});
    this.route('view', {path: '/view/:user_id'});
    this.route('edit', {path: '/edit/:user_id'});
    this.route('assign' ,{path: '/assign/:user_id'});
  });

  this.route('classes', function() {
    this.route('new');
    this.route('edit',{path: '/edit/:class_id'});
    this.route('list');
    this.route('list',{path:'/'});
  });
  this.route('about');
});

export default Router;
