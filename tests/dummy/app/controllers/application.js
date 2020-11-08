import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class ApplicationController extends Controller {
  @alias('model') myModel;
}
