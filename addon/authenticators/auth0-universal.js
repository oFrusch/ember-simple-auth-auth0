import { inject as service } from '@ember/service';
import Auth0BaseAuthenticator from 'ember-simple-auth-auth0/authenticators/auth0-base';

export default Auth0BaseAuthenticator.extend({
  auth0: service(),
  authenticate(options) {
    return this.auth0.universalLogin(options);
  }
});
