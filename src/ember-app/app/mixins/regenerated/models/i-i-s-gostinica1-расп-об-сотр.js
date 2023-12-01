import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  место: DS.attr('string'),
  наименование: DS.attr('string'),
  регНомер: DS.attr('string'),
  гостиница: DS.belongsTo('i-i-s-gostinica1-гостиница', { inverse: null, async: false }),
  директор: DS.belongsTo('i-i-s-gostinica1-директор', { inverse: null, async: false }),
  тЧРаспОбСотр: DS.belongsTo('i-i-s-gostinica1-т-ч-расп-об-сотр', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-gostinica1-расп-об-сотр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-gostinica1-расп-об-сотр.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-gostinica1-расп-об-сотр.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  регНомер: {
    descriptionKey: 'models.i-i-s-gostinica1-расп-об-сотр.validations.регНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  гостиница: {
    descriptionKey: 'models.i-i-s-gostinica1-расп-об-сотр.validations.гостиница.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  директор: {
    descriptionKey: 'models.i-i-s-gostinica1-расп-об-сотр.validations.директор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРаспОбСотр: {
    descriptionKey: 'models.i-i-s-gostinica1-расп-об-сотр.validations.тЧРаспОбСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РаспОбСотрE', 'i-i-s-gostinica1-расп-об-сотр', {
    регНомер: attr('Рег номер', { index: 0 }),
    место: attr('Место', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    наименование: attr('Наименование', { index: 3 }),
    гостиница: belongsTo('i-i-s-gostinica1-гостиница', 'Гостиница', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    директор: belongsTo('i-i-s-gostinica1-директор', 'Директор', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    тЧРаспОбСотр: belongsTo('i-i-s-gostinica1-т-ч-расп-об-сотр', 'Т ч расп об сотр', {
      обязанности: attr('Обязанности', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'обязанности' })
  });

  modelClass.defineProjection('РаспОбСотрL', 'i-i-s-gostinica1-расп-об-сотр', {
    регНомер: attr('Рег номер', { index: 0 }),
    место: attr('Место', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    наименование: attr('Наименование', { index: 3 }),
    гостиница: belongsTo('i-i-s-gostinica1-гостиница', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true }),
    директор: belongsTo('i-i-s-gostinica1-директор', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true }),
    тЧРаспОбСотр: belongsTo('i-i-s-gostinica1-т-ч-расп-об-сотр', 'Обязанности', {
      обязанности: attr('Обязанности', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
