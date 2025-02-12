import { SalesOrderBase } from './SalesOrderBase';
import {
  FieldTypeDecorator,
  SubListDecorator,
} from '../Core/DataAccess/NSTypedRecord';

import { NSSubList } from '../Core/DataAccess/NSSubList';
import { SalesOrderItemSublist } from './SalesOrderItemSublist';

export class SalesOrder extends SalesOrderBase {
  // Custom fields definition...

  @SubListDecorator(SalesOrderItemSublist)
  override accessor item: NSSubList<SalesOrderItemSublist>;
}