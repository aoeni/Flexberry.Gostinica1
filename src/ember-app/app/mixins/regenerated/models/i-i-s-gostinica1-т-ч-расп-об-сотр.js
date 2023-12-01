import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСостав: DS.attr('date'),
  номер: DS.attr('number'),
  обязанности: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-gostinica1-должности', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-gostinica1-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  датаСостав: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-расп-об-сотр.validations.датаСостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-расп-об-сотр.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  обязанности: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-расп-об-сотр.validations.обязанности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-расп-об-сотр.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-расп-об-сотр.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРаспОбСотрE', 'i-i-s-gostinica1-т-ч-расп-об-сотр', {
    номер: attr('Номер', { index: 0 }),
    обязанности: attr('Обязанности', { index: 1 }),
    датаСостав: attr('Дата состав', { index: 2 }),
    персонал: belongsTo('i-i-s-gostinica1-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    должности: belongsTo('i-i-s-gostinica1-должности', 'Должности', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ТЧРаспОбСотрL', 'i-i-s-gostinica1-т-ч-расп-об-сотр', {
    номер: attr('Номер', { index: 0 }),
    обязанности: attr('Обязанности', { index: 1 }),
    датаСостав: attr('Дата состав', { index: 2 }),
    персонал: belongsTo('i-i-s-gostinica1-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    должности: belongsTo('i-i-s-gostinica1-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
