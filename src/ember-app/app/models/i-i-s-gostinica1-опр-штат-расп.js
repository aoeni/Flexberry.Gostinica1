import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОпрШтатРаспMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-опр-штат-расп';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОпрШтатРаспMixin, Validations, {
});

defineProjections(Model);

export default Model;
