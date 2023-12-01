import {
  defineNamespace,
  defineProjections,
  Model as ТЧОпШтРаспMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-т-ч-оп-шт-расп';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧОпШтРаспMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
