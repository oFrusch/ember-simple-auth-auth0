import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default class ProtectedRoute extends Route.extend(AuthenticatedRouteMixin) {
  @service store;

  authenticationRoute = 'login';

  model() {
    return this.store.findAll('post').catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
  }
}
