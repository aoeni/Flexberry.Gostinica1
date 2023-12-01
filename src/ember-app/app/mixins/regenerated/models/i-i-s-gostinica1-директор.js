import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  персонал: DS.belongsTo('i-i-s-gostinica1-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-gostinica1-директор.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-gostinica1-директор.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДиректорE', 'i-i-s-gostinica1-директор', {
    фИО: attr('ФИО', { index: 0 }),
    персонал: belongsTo('i-i-s-gostinica1-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ДиректорL', 'i-i-s-gostinica1-директор', {
    фИО: attr('ФИО', { index: 0 }),
    персонал: belongsTo('i-i-s-gostinica1-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
