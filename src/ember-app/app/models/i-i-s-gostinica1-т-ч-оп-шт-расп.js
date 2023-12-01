import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧОпШтРаспMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-т-ч-оп-шт-расп';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧОпШтРаспMixin, Validations, {
});

defineProjections(Model);

export default Model;
