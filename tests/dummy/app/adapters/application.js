import { inject as service } from '@ember/service';
import JSONAPIAdapter from '@ember-data/adapter/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default class ApplicationAdapter extends JSONAPIAdapter.extend(DataAdapterMixin) {
  namespace = 'api';

  @service session;

  authorize(xhr) {
    let { idToken } = this.session.data.authenticated;
    let authData = `Bearer ${idToken}`;
    xhr.setRequestHeader('Authorization', authData);
  }
}
