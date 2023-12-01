import {
  defineNamespace,
  defineProjections,
  Model as ОпрШтатРаспMixin
} from '../mixins/regenerated/models/i-i-s-gostinica1-опр-штат-расп';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОпрШтатРаспMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
