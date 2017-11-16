import Controller from '@ember/controller';

export default Controller.extend({
  isDisabled: Ember.computed.not('isValid'),

  isEmpty: Ember.computed.empty('msg'),
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  emailAddress: '',

  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() {

    console.log('observer is called', this.get('emailAddress'));

  }),

  msg: '',

  actualMsg: Ember.computed('msg', function() {
    console.log('actualMsg function is called: ', this.get('msg'));
  }),

  emailMsg: Ember.observer('msg', function() {

    console.log('observer is called', this.get('msg'));

  }),

  actions: {
    saveMessage() {
      alert(`Saving of the following email address and message is in progress: ${this.get('emailAddress')} ${this.get('msg')}`);
      this.set('responseMessage', `Thank you! We've just saved your email addres and message`);
      this.set('emailAddress', '');
      this.set('msg', '');
    }
  }
});
