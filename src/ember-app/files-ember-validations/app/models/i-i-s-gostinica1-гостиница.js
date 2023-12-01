import {
  defineNamespace,
  defineProjections,
  Model as ГостиницаMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-гостиница';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГостиницаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
