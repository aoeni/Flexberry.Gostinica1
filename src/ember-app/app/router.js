import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gostinica1-гостиница-l');
  this.route('i-i-s-gostinica1-гостиница-e',
  { path: 'i-i-s-gostinica1-гостиница-e/:id' });
  this.route('i-i-s-gostinica1-гостиница-e.new',
  { path: 'i-i-s-gostinica1-гостиница-e/new' });
  this.route('i-i-s-gostinica1-директор-l');
  this.route('i-i-s-gostinica1-директор-e',
  { path: 'i-i-s-gostinica1-директор-e/:id' });
  this.route('i-i-s-gostinica1-директор-e.new',
  { path: 'i-i-s-gostinica1-директор-e/new' });
  this.route('i-i-s-gostinica1-должности-l');
  this.route('i-i-s-gostinica1-должности-e',
  { path: 'i-i-s-gostinica1-должности-e/:id' });
  this.route('i-i-s-gostinica1-должности-e.new',
  { path: 'i-i-s-gostinica1-должности-e/new' });
  this.route('i-i-s-gostinica1-опр-штат-расп-l');
  this.route('i-i-s-gostinica1-опр-штат-расп-e',
  { path: 'i-i-s-gostinica1-опр-штат-расп-e/:id' });
  this.route('i-i-s-gostinica1-опр-штат-расп-e.new',
  { path: 'i-i-s-gostinica1-опр-штат-расп-e/new' });
  this.route('i-i-s-gostinica1-персонал-l');
  this.route('i-i-s-gostinica1-персонал-e',
  { path: 'i-i-s-gostinica1-персонал-e/:id' });
  this.route('i-i-s-gostinica1-персонал-e.new',
  { path: 'i-i-s-gostinica1-персонал-e/new' });
  this.route('i-i-s-gostinica1-расп-об-сотр-l');
  this.route('i-i-s-gostinica1-расп-об-сотр-e',
  { path: 'i-i-s-gostinica1-расп-об-сотр-e/:id' });
  this.route('i-i-s-gostinica1-расп-об-сотр-e.new',
  { path: 'i-i-s-gostinica1-расп-об-сотр-e/new' });
  this.route('i-i-s-gostinica1-т-ч-оп-шт-расп-l');
  this.route('i-i-s-gostinica1-т-ч-оп-шт-расп-e',
  { path: 'i-i-s-gostinica1-т-ч-оп-шт-расп-e/:id' });
  this.route('i-i-s-gostinica1-т-ч-оп-шт-расп-e.new',
  { path: 'i-i-s-gostinica1-т-ч-оп-шт-расп-e/new' });
  this.route('i-i-s-gostinica1-т-ч-расп-об-сотр-l');
  this.route('i-i-s-gostinica1-т-ч-расп-об-сотр-e',
  { path: 'i-i-s-gostinica1-т-ч-расп-об-сотр-e/:id' });
  this.route('i-i-s-gostinica1-т-ч-расп-об-сотр-e.new',
  { path: 'i-i-s-gostinica1-т-ч-расп-об-сотр-e/new' });
});

export default Router;
