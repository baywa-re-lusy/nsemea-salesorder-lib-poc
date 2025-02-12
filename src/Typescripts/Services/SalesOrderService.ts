import {SalesOrder} from "../Entities/SalesOrder";
import * as log from 'N/log';
import {SalesOrderItemSublist} from "../Entities/SalesOrderItemSublist";

export class SalesOrderService {

  /**
   * Set fulfillment data on all item line base on header data
   * inventory location column is set with header location value
   * @param so Sales order instance representing the related transaction
   */
  setFulfillmentLocationOnItemLines(so: SalesOrder) {
    const headerLocation  = so.location;
    const headerSubsidiary = so.subsidiary;
    so.item.entries.forEach((item: SalesOrderItemSublist) => {
      item.ignoreFieldChange = true;
      item.forceSyncSourcing = true;
      item.inventorylocation = headerLocation;
      so.item.commitLine();
    });
  }

  /**
   * Set fulfillment data on current item line base on header data
   * inventory location column is set with header location value
   * @param so Sales order instance representing the related transaction
   */
  setFulfillmentLocationOnCurrentItemLine(so: SalesOrder) {
    const currIndex = so.item.getCurrentSublistIndex();
    const headerLocation  = so.location;
    const headerSubsidiary = so.subsidiary;
    so.item[currIndex].inventorylocation = headerLocation;
    so.item[currIndex].inventorysubsidiary = headerSubsidiary;
  }
}