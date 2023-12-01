import { Serializer as РаспОбСотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gostinica1-расп-об-сотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РаспОбСотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
