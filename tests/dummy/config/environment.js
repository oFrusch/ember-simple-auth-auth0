/* jshint node: true */
require('dotenv').config();

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    routeAfterAuthentication: 'protected',
    routeIfAlreadyAuthenticated: 'protected',
    // auth0: {
    //   clientID: process.env.AUTH0_CLIENT_ID,
    //   domain: process.env.AUTH0_DOMAIN
    // }
    auth0: {
      // clientID: 'Gcs1jSu5FAFpDrPe0jrqGpfbTEkzCk15',
      // domain: 'pwdlessdemo.auth0.com'
      clientID: 'QTrPPogPlnZVteshg3B9rH79ibMxYfzq',
      domain: 'liteturn.auth0.com'
    }
  };

  return ENV;
};
