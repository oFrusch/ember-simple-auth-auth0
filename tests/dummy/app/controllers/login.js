import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';

export default class LoginController extends Controller {
  @service session;

  @alias('model') myModel;

  @action
  login() {
    this.session.authenticate('authenticator:auth0-lock');
  }

  @action
  loginPasswordless(method, connection) {
    const lockOptions = {
      passwordlessMethod: method,
      allowedConnections: [connection],
      autoclose: true,
    };

    this.session.authenticate('authenticator:auth0-lock-passwordless', lockOptions, () => {
      // eslint-disable-next-line no-console
      console.log('Passwordless sent');
    });
  }
}
