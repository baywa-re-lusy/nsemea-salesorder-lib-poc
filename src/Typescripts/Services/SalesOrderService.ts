import {SalesOrder} from "../Entities/SalesOrder";
import * as log from 'N/log';
import {SalesOrderItemSublist} from "../Entities/SalesOrderItemSublist";

export class SalesOrderService {

  /**
   * Set fulfillment data on all item line base on header data
   * inventory location column is set with header location value
   * inventory subsidiary column is set with header subsidiary value
   * @param so Sales order instance representing the related transaction
   */
  setFulfillmentLocationOnItemLines(so: SalesOrder) {
    const headerLocation = so.location;
    const headerSubsidiary = so.subsidiary;

    log.debug('SalesOrderService : setFulfillmentLocationOnCurrentItemLine', `header location: ${headerLocation}`);
    log.debug('SalesOrderService : setFulfillmentLocationOnCurrentItemLine', `header subsidiary: ${headerSubsidiary}`);

    so.item.entries.forEach((item: SalesOrderItemSublist) => {
      log.debug('SalesOrderService : setFulfillmentLocationOnItemLines', `location before: ${item.inventorylocation}`);
      log.debug('SalesOrderService : setFulfillmentLocationOnItemLines', `subsidiary before: ${item.inventorysubsidiary}`);
      item.inventorylocation = headerLocation;
      item.inventorysubsidiary = headerSubsidiary;
      log.debug('SalesOrderService : setFulfillmentLocationOnItemLines', `location after: ${item.inventorylocation}`);
      log.debug('SalesOrderService : setFulfillmentLocationOnItemLines', `subsidiary after: ${item.inventorysubsidiary}`);
    });
  }

  /**
   * Set fulfillment data on current item line base on header data
   * inventory location column is set with header location value
   * inventory subsidiary column is set with header subsidiary value
   * @param so Sales order instance representing the related transaction
   */
  setFulfillmentLocationOnCurrentItemLine(so: SalesOrder) {
    const currIndex = so.item.getCurrentSublistIndex();
    const headerLocation = so.location;

    so.item[currIndex].inventorylocation = headerLocation;
    return `Inventory location ${headerLocation} was set on line index ${currIndex}`;
  }
}