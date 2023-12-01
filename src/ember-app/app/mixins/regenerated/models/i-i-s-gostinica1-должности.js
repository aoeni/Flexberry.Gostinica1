import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  колвоШтатЕд: DS.attr('decimal'),
  наименование: DS.attr('string'),
  оклад: DS.attr('decimal')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-gostinica1-должности.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колвоШтатЕд: {
    descriptionKey: 'models.i-i-s-gostinica1-должности.validations.колвоШтатЕд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-gostinica1-должности.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-gostinica1-должности.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-gostinica1-должности', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    колвоШтатЕд: attr('Колво штат ед', { index: 2 }),
    оклад: attr('Оклад', { index: 3 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-gostinica1-должности', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    колвоШтатЕд: attr('Колво штат ед', { index: 2 }),
    оклад: attr('Оклад', { index: 3 })
  });
};
