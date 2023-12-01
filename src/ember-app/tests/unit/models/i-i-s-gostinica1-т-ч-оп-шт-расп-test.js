import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gostinica1-т-ч-оп-шт-расп', 'Unit | Model | i-i-s-gostinica1-т-ч-оп-шт-расп', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-gostinica1-гостиница',
    'model:i-i-s-gostinica1-директор',
    'model:i-i-s-gostinica1-должности',
    'model:i-i-s-gostinica1-опр-штат-расп',
    'model:i-i-s-gostinica1-персонал',
    'model:i-i-s-gostinica1-расп-об-сотр',
    'model:i-i-s-gostinica1-т-ч-оп-шт-расп',
    'model:i-i-s-gostinica1-т-ч-расп-об-сотр',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
