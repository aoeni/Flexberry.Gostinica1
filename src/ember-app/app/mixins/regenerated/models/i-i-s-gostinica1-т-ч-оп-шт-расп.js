import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  всего: DS.attr('decimal'),
  дата: DS.attr('date'),
  надбавки: DS.attr('decimal'),
  должности: DS.belongsTo('i-i-s-gostinica1-должности', { inverse: null, async: false }),
  опрШтатРасп: DS.belongsTo('i-i-s-gostinica1-опр-штат-расп', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-gostinica1-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  всего: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-оп-шт-расп.validations.всего.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-оп-шт-расп.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  надбавки: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-оп-шт-расп.validations.надбавки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-оп-шт-расп.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  опрШтатРасп: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-оп-шт-расп.validations.опрШтатРасп.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-gostinica1-т-ч-оп-шт-расп.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧОпШтРаспE', 'i-i-s-gostinica1-т-ч-оп-шт-расп', {
    надбавки: attr('Надбавки', { index: 0 }),
    всего: attr('Всего', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    персонал: belongsTo('i-i-s-gostinica1-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    опрШтатРасп: belongsTo('i-i-s-gostinica1-опр-штат-расп', 'Опр штат расп', {
      дата: attr('Дата', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'дата' }),
    должности: belongsTo('i-i-s-gostinica1-должности', 'Должности', {
      наименование: attr('Наименование', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ТЧОпШтРаспL', 'i-i-s-gostinica1-т-ч-оп-шт-расп', {
    надбавки: attr('Надбавки', { index: 0 }),
    всего: attr('Всего', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    персонал: belongsTo('i-i-s-gostinica1-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    опрШтатРасп: belongsTo('i-i-s-gostinica1-опр-штат-расп', 'Дата', {
      дата: attr('Дата', { index: 4 })
    }, { index: -1, hidden: true }),
    должности: belongsTo('i-i-s-gostinica1-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
