import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РаспОбСотрMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-расп-об-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РаспОбСотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
