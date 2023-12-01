import {
  defineNamespace,
  defineProjections,
  Model as РаспОбСотрMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-расп-об-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РаспОбСотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
