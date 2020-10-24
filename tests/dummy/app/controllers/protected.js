import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { computed, action } from '@ember/object';
import moment from 'moment';

export default class ProtectedController extends Controller {
  @service session;

  @service auth0;

  @alias('model') posts;

  @computed('session.data.authenticated.{idTokenPayload.exp,expiresIn}')
  get expiresIn() {
    const foo = this.session.data.authenticated.idTokenPayload?.exp;
    if (foo) {
      return moment.unix(foo);
    }

    const exp = this.session.data.authenticated?.expiresIn;
    if (exp) {
      return Date.now() + exp * 1000;
    }
  }

  @action
  logout() {
    this.session.invalidate();
  }

  @action
  logoutOfAuth0() {
    this.auth0.logout();
  }
}
