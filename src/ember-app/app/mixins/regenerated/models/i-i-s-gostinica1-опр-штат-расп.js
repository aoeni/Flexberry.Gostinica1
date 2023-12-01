import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  период: DS.attr('date'),
  гостиница: DS.belongsTo('i-i-s-gostinica1-гостиница', { inverse: null, async: false }),
  директор: DS.belongsTo('i-i-s-gostinica1-директор', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-gostinica1-опр-штат-расп.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-gostinica1-опр-штат-расп.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  период: {
    descriptionKey: 'models.i-i-s-gostinica1-опр-штат-расп.validations.период.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  гостиница: {
    descriptionKey: 'models.i-i-s-gostinica1-опр-штат-расп.validations.гостиница.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  директор: {
    descriptionKey: 'models.i-i-s-gostinica1-опр-штат-расп.validations.директор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОпрШтатРаспE', 'i-i-s-gostinica1-опр-штат-расп', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    период: attr('Период', { index: 2 }),
    гостиница: belongsTo('i-i-s-gostinica1-гостиница', 'Гостиница', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    директор: belongsTo('i-i-s-gostinica1-директор', 'Директор', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОпрШтатРаспL', 'i-i-s-gostinica1-опр-штат-расп', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    период: attr('Период', { index: 2 }),
    гостиница: belongsTo('i-i-s-gostinica1-гостиница', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    директор: belongsTo('i-i-s-gostinica1-директор', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
