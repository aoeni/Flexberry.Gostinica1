import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.gostinica1.caption'),
          title: i18n.t('forms.application.sitemap.gostinica1.title'),
          children: [{
            link: 'i-i-s-gostinica1-т-ч-оп-шт-расп-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-т-ч-оп-шт-расп-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-т-ч-оп-шт-расп-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-gostinica1-персонал-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-персонал-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-gostinica1-гостиница-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-гостиница-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-гостиница-l.title'),
            children: null
          }, {
            link: 'i-i-s-gostinica1-т-ч-расп-об-сотр-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-т-ч-расп-об-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-т-ч-расп-об-сотр-l.title'),
            children: null
          }, {
            link: 'i-i-s-gostinica1-опр-штат-расп-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-опр-штат-расп-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-опр-штат-расп-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-gostinica1-расп-об-сотр-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-расп-об-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-расп-об-сотр-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-gostinica1-директор-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-директор-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-директор-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-gostinica1-должности-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-должности-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})