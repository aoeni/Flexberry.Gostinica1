import { Serializer as ДиректорSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gostinica1-директор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДиректорSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
