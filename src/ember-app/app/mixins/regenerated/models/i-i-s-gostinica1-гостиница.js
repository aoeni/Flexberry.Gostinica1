import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  оКПО: DS.attr('string'),
  оргПравФорма: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-gostinica1-гостиница.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оКПО: {
    descriptionKey: 'models.i-i-s-gostinica1-гостиница.validations.оКПО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оргПравФорма: {
    descriptionKey: 'models.i-i-s-gostinica1-гостиница.validations.оргПравФорма.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостиницаE', 'i-i-s-gostinica1-гостиница', {
    наименование: attr('Наименование', { index: 0 }),
    оргПравФорма: attr('Орг прав форма', { index: 1 }),
    оКПО: attr('ОКПО', { index: 2 })
  });

  modelClass.defineProjection('ГостиницаL', 'i-i-s-gostinica1-гостиница', {
    наименование: attr('Наименование', { index: 0 }),
    оргПравФорма: attr('Орг прав форма', { index: 1 }),
    оКПО: attr('ОКПО', { index: 2 })
  });
};
