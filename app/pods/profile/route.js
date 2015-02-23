import Route from 'ember/route';

export default Route.extend({
  model(params) {
    /*
      "user": { },
      "repos": [ ],
      "activity-feed": [ ]
    */
    return this.store.find('user', params.userId);
  }
});
