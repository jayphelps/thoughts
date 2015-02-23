import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('profile', '/:userId', function() {
    this.resource('repo', '/:repoName', function() {
      this.resource('prs', 'prs', function() {
        this.route('pr', ':prId');
      });
      this.resource('issues', '/issues', function() {
        this.route('issue', ':issueId');
      });
    });
  });
});

export default Router;
