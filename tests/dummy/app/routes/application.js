import Route from '@ember/routing/route';
import ApplicationRouteMixin from '@jebbit/ember-simple-auth-auth0/mixins/application-route-mixin';

export default class ApplicationRoute extends Route.extend(ApplicationRouteMixin) {
  routeAfterAuthentication = 'protected';
}
