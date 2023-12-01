import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGostinica1ГостиницаLForm from './forms/i-i-s-gostinica1-гостиница-l';
import IISGostinica1ДиректорLForm from './forms/i-i-s-gostinica1-директор-l';
import IISGostinica1ДолжностиLForm from './forms/i-i-s-gostinica1-должности-l';
import IISGostinica1ОпрШтатРаспLForm from './forms/i-i-s-gostinica1-опр-штат-расп-l';
import IISGostinica1ПерсоналLForm from './forms/i-i-s-gostinica1-персонал-l';
import IISGostinica1РаспОбСотрLForm from './forms/i-i-s-gostinica1-расп-об-сотр-l';
import IISGostinica1ТЧОпШтРаспLForm from './forms/i-i-s-gostinica1-т-ч-оп-шт-расп-l';
import IISGostinica1ТЧРаспОбСотрLForm from './forms/i-i-s-gostinica1-т-ч-расп-об-сотр-l';
import IISGostinica1ГостиницаEForm from './forms/i-i-s-gostinica1-гостиница-e';
import IISGostinica1ДиректорEForm from './forms/i-i-s-gostinica1-директор-e';
import IISGostinica1ДолжностиEForm from './forms/i-i-s-gostinica1-должности-e';
import IISGostinica1ОпрШтатРаспEForm from './forms/i-i-s-gostinica1-опр-штат-расп-e';
import IISGostinica1ПерсоналEForm from './forms/i-i-s-gostinica1-персонал-e';
import IISGostinica1РаспОбСотрEForm from './forms/i-i-s-gostinica1-расп-об-сотр-e';
import IISGostinica1ТЧОпШтРаспEForm from './forms/i-i-s-gostinica1-т-ч-оп-шт-расп-e';
import IISGostinica1ТЧРаспОбСотрEForm from './forms/i-i-s-gostinica1-т-ч-расп-об-сотр-e';
import IISGostinica1ГостиницаModel from './models/i-i-s-gostinica1-гостиница';
import IISGostinica1ДиректорModel from './models/i-i-s-gostinica1-директор';
import IISGostinica1ДолжностиModel from './models/i-i-s-gostinica1-должности';
import IISGostinica1ОпрШтатРаспModel from './models/i-i-s-gostinica1-опр-штат-расп';
import IISGostinica1ПерсоналModel from './models/i-i-s-gostinica1-персонал';
import IISGostinica1РаспОбСотрModel from './models/i-i-s-gostinica1-расп-об-сотр';
import IISGostinica1ТЧОпШтРаспModel from './models/i-i-s-gostinica1-т-ч-оп-шт-расп';
import IISGostinica1ТЧРаспОбСотрModel from './models/i-i-s-gostinica1-т-ч-расп-об-сотр';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gostinica1-гостиница': IISGostinica1ГостиницаModel,
    'i-i-s-gostinica1-директор': IISGostinica1ДиректорModel,
    'i-i-s-gostinica1-должности': IISGostinica1ДолжностиModel,
    'i-i-s-gostinica1-опр-штат-расп': IISGostinica1ОпрШтатРаспModel,
    'i-i-s-gostinica1-персонал': IISGostinica1ПерсоналModel,
    'i-i-s-gostinica1-расп-об-сотр': IISGostinica1РаспОбСотрModel,
    'i-i-s-gostinica1-т-ч-оп-шт-расп': IISGostinica1ТЧОпШтРаспModel,
    'i-i-s-gostinica1-т-ч-расп-об-сотр': IISGostinica1ТЧРаспОбСотрModel
  },

  'application-name': 'Gostinica1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Gostinica1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gostinica1',
          title: 'Gostinica1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        gostinica1: {
          caption: 'Gostinica1',
          title: 'Gostinica1',
          'i-i-s-gostinica1-т-ч-оп-шт-расп-l': {
            caption: 'Т ч оп шт расп',
            title: ''
          },
          'i-i-s-gostinica1-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-gostinica1-гостиница-l': {
            caption: 'Гостиница',
            title: ''
          },
          'i-i-s-gostinica1-т-ч-расп-об-сотр-l': {
            caption: 'Т ч расп об сотр',
            title: ''
          },
          'i-i-s-gostinica1-опр-штат-расп-l': {
            caption: 'Опр штат расп',
            title: ''
          },
          'i-i-s-gostinica1-расп-об-сотр-l': {
            caption: 'Расп об сотр',
            title: ''
          },
          'i-i-s-gostinica1-директор-l': {
            caption: 'Директор',
            title: ''
          },
          'i-i-s-gostinica1-должности-l': {
            caption: 'Должности',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gostinica1-гостиница-l': IISGostinica1ГостиницаLForm,
    'i-i-s-gostinica1-директор-l': IISGostinica1ДиректорLForm,
    'i-i-s-gostinica1-должности-l': IISGostinica1ДолжностиLForm,
    'i-i-s-gostinica1-опр-штат-расп-l': IISGostinica1ОпрШтатРаспLForm,
    'i-i-s-gostinica1-персонал-l': IISGostinica1ПерсоналLForm,
    'i-i-s-gostinica1-расп-об-сотр-l': IISGostinica1РаспОбСотрLForm,
    'i-i-s-gostinica1-т-ч-оп-шт-расп-l': IISGostinica1ТЧОпШтРаспLForm,
    'i-i-s-gostinica1-т-ч-расп-об-сотр-l': IISGostinica1ТЧРаспОбСотрLForm,
    'i-i-s-gostinica1-гостиница-e': IISGostinica1ГостиницаEForm,
    'i-i-s-gostinica1-директор-e': IISGostinica1ДиректорEForm,
    'i-i-s-gostinica1-должности-e': IISGostinica1ДолжностиEForm,
    'i-i-s-gostinica1-опр-штат-расп-e': IISGostinica1ОпрШтатРаспEForm,
    'i-i-s-gostinica1-персонал-e': IISGostinica1ПерсоналEForm,
    'i-i-s-gostinica1-расп-об-сотр-e': IISGostinica1РаспОбСотрEForm,
    'i-i-s-gostinica1-т-ч-оп-шт-расп-e': IISGostinica1ТЧОпШтРаспEForm,
    'i-i-s-gostinica1-т-ч-расп-об-сотр-e': IISGostinica1ТЧРаспОбСотрEForm
  },

});

export default translations;
