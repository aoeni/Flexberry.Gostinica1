import { Serializer as ОпрШтатРаспSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gostinica1-опр-штат-расп';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОпрШтатРаспSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
