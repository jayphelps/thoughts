import Component from 'ember/component';

export default Component.extend({
  decorators: {
    user: ['email', 'username']
  }
});