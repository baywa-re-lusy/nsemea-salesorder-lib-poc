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
    so.item.entries.forEach((item: SalesOrderItemSublist) => {
      item.inventorylocation = so.location;
    });
  }

  /**
   * Set fulfillment data on current item line base on header data
   * inventory location column is set with header location value
   * @param so Sales order instance representing the related transaction
   */
  setFulfillmentLocationOnCurrentItemLine(so: SalesOrder) {
    const currIndex = so.item.getCurrentSublistIndex();
    so.item[currIndex].inventorylocation = so.location;
  }
}