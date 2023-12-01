import {
  defineNamespace,
  defineProjections,
  Model as ДиректорMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-директор';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДиректорMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
