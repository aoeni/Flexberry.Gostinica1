import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gostinica1-директор', 'Unit | Serializer | i-i-s-gostinica1-директор', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gostinica1-директор',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
