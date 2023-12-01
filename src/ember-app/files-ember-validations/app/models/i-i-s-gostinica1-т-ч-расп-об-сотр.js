import {
  defineNamespace,
  defineProjections,
  Model as ТЧРаспОбСотрMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-т-ч-расп-об-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧРаспОбСотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
