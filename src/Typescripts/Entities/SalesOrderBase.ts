/**
 * NetSuite sales order record
 */
import * as record from 'N/record';
import { TransactionBase } from '../Core/DataAccess/TransactionBase';
import {
  FieldTypeDecorator,
  Nullable,
  SubListDecorator,
  SubRecordDecorator,
} from '../Core/DataAccess/NSTypedRecord';
import {
  NSSubList,
  SubListFieldTypeDecorator,
} from '../Core/DataAccess/NSSubList';
import { AddressBase } from '../Core/DataAccess/AddressBase';
import { NSSubListLine } from '../Core/DataAccess/NSSubListLine';

/**
 * Sublist 'item' on sales orders
 */
export class ItemSublist extends NSSubListLine {
  @SubListFieldTypeDecorator()
  accessor altsalesamt: number;

  @SubListFieldTypeDecorator()
  accessor amortizationperiod: string;

  @SubListFieldTypeDecorator()
  accessor amortizationtype: string;

  @SubListFieldTypeDecorator()
  accessor amount: number;

  @SubListFieldTypeDecorator()
  accessor billvariancestatus: string;

  @SubListFieldTypeDecorator()
  accessor catchupperiod: number;

  @SubListFieldTypeDecorator()
  accessor chargetype: string;

  @SubListFieldTypeDecorator()
  accessor commitinventory: number;

  @SubListFieldTypeDecorator()
  accessor costestimate: number;

  @SubListFieldTypeDecorator()
  accessor costestimaterate: number;

  @SubListFieldTypeDecorator()
  accessor costestimatetype: number;

  @SubListFieldTypeDecorator()
  accessor createdpo: number;

  @SubListFieldTypeDecorator()
  accessor createpo: number;

  @SubListFieldTypeDecorator()
  accessor createwo: boolean;

  @SubListFieldTypeDecorator()
  accessor daysbeforeexpiration: string;

  @SubListFieldTypeDecorator()
  accessor description: string;

  @SubListFieldTypeDecorator()
  accessor deferrevrec: boolean;

  @SubListFieldTypeDecorator()
  accessor excludefromraterequest: boolean;

  @SubListFieldTypeDecorator()
  accessor expectedshipdate: Date;

  @SubListFieldTypeDecorator()
  accessor fromjob: boolean;

  @SubListFieldTypeDecorator()
  accessor giftcertfrom: string;

  @SubListFieldTypeDecorator()
  accessor giftcertmessage: string;

  @SubListFieldTypeDecorator()
  accessor giftcertrecipientemail: string;

  @SubListFieldTypeDecorator()
  accessor giftcertrecipientname: string;

  @SubListFieldTypeDecorator()
  accessor id: string;

  @SubListFieldTypeDecorator()
  accessor isclosed: boolean;

  @SubListFieldTypeDecorator()
  accessor isestimate: boolean;

  @SubListFieldTypeDecorator()
  accessor istaxable: boolean;

  @SubListFieldTypeDecorator()
  accessor isvsoebundle: string;

  @SubListFieldTypeDecorator()
  accessor item: number;

  @SubListFieldTypeDecorator()
  accessor itemfulfillmentchoice: string;

  @SubListFieldTypeDecorator()
  accessor itemsubtype: string;

  @SubListFieldTypeDecorator()
  accessor itemtype: string;

  @SubListFieldTypeDecorator()
  accessor licensecode: string;

  @SubListFieldTypeDecorator()
  accessor line: string;

  @SubListFieldTypeDecorator()
  accessor lineuniquekey: string;

  @SubListFieldTypeDecorator()
  accessor linenumber: number;

  @SubListFieldTypeDecorator()
  accessor location: number;

  @SubListFieldTypeDecorator()
  accessor inventorylocation: number;

  @SubListFieldTypeDecorator()
  accessor inventorysubsidiary: number;

  @SubListFieldTypeDecorator()
  accessor locationautoassigned: boolean;

  @SubListFieldTypeDecorator()
  accessor matrixtype: string;

  @SubListFieldTypeDecorator()
  accessor noautoassignlocation: boolean;

  @SubListFieldTypeDecorator()
  accessor options: string;

  @SubListFieldTypeDecorator()
  accessor orderpriority: number;

  @SubListFieldTypeDecorator()
  accessor porate: number;

  @SubListFieldTypeDecorator()
  accessor povendor: string;

  @SubListFieldTypeDecorator()
  accessor price: number;

  @SubListFieldTypeDecorator()
  accessor printitems: string;

  @SubListFieldTypeDecorator()
  accessor quantity: number;

  @SubListFieldTypeDecorator()
  accessor quantityavailable: number;

  @SubListFieldTypeDecorator()
  accessor quantitybackordered: number;

  @SubListFieldTypeDecorator()
  accessor quantitybilled: number;

  @SubListFieldTypeDecorator()
  accessor quantitycommitted: number;

  @SubListFieldTypeDecorator()
  accessor quantityfulfilled: number;

  @SubListFieldTypeDecorator()
  accessor quantityrevcommitted: number;

  @SubListFieldTypeDecorator()
  accessor rate: number;

  @SubListFieldTypeDecorator()
  accessor rateschedule: string;

  @SubListFieldTypeDecorator()
  accessor revrecschedule: number;

  @SubListFieldTypeDecorator()
  accessor revrecstartdate: Date;

  @SubListFieldTypeDecorator()
  accessor revrecenddate: Date;

  @SubListFieldTypeDecorator()
  accessor shipaddress: number;

  @SubListFieldTypeDecorator()
  accessor shipcarrier: number;

  @SubListFieldTypeDecorator()
  accessor shipmethod: number;

  @SubListFieldTypeDecorator()
  accessor subscription: number

  @SubListFieldTypeDecorator()
  accessor taxcode: number;

  @SubListFieldTypeDecorator()
  accessor taxrate1: number;

  @SubListFieldTypeDecorator()
  accessor units: number;

  @SubListFieldTypeDecorator()
  accessor vsoeallocation: number;

  @SubListFieldTypeDecorator()
  accessor vsoeamount: number;

  @SubListFieldTypeDecorator()
  accessor vsoedeferral: number;

  @SubListFieldTypeDecorator()
  accessor vsoedelivered: boolean;

  @SubListFieldTypeDecorator()
  accessor vsoeisestimate: boolean;

  @SubListFieldTypeDecorator()
  accessor vsoepermitdiscount: number;

  @SubListFieldTypeDecorator()
  accessor vsoeprice: number;

  @SubListFieldTypeDecorator()
  accessor vsoesopgroup: number;
}

/**
 * Sublist 'salesteam' on sales orders
 */
export class SalesTeamSublist extends NSSubListLine {
  @SubListFieldTypeDecorator()
  accessor contribution: number;

  @SubListFieldTypeDecorator()
  accessor employee: number;

  @SubListFieldTypeDecorator()
  accessor isprimary: boolean;

  @SubListFieldTypeDecorator()
  accessor salesrole: number;
}

/**
 * NetSuite sales order record
 */
export class SalesOrderBase extends TransactionBase {

  @FieldTypeDecorator()
  accessor allowemptycards: boolean;

  @FieldTypeDecorator()
  accessor althandlingcost: number;

  @FieldTypeDecorator()
  accessor altsalestotal: number;

  @FieldTypeDecorator()
  accessor altshippingcost: number;

  @FieldTypeDecorator()
  accessor authcode: string;

  @FieldTypeDecorator()
  accessor balance: number;

  @FieldTypeDecorator()
  accessor billaddresslist: number;

  @SubRecordDecorator(AddressBase)
  accessor billingaddress: AddressBase;

  @FieldTypeDecorator()
  accessor billingschedule: number;

  @FieldTypeDecorator()
  accessor billisresidential: string;

  @FieldTypeDecorator()
  accessor canhavestackable: boolean;

  @FieldTypeDecorator()
  accessor ccapproved: boolean;

  @FieldTypeDecorator()
  accessor ccavsstreetmatch: number;

  @FieldTypeDecorator()
  accessor ccavszipmatch: number;

  @FieldTypeDecorator()
  accessor ccexpiredate: string;

  @FieldTypeDecorator()
  accessor cchold: string;

  @FieldTypeDecorator()
  accessor ccholdetails: string;

  @FieldTypeDecorator()
  accessor cciavsmatch: number;

  @FieldTypeDecorator()
  accessor ccname: string;

  @FieldTypeDecorator()
  accessor ccnumber: string;

  @FieldTypeDecorator()
  accessor ccprocessoraccount: string;

  @FieldTypeDecorator()
  accessor ccsecuritycode: string;

  @FieldTypeDecorator()
  accessor ccsecuritycodematch: number;

  @FieldTypeDecorator()
  accessor ccstreet: string;

  @FieldTypeDecorator()
  accessor cczipcode: string;

  @FieldTypeDecorator()
  accessor class: number;

  @FieldTypeDecorator()
  accessor consolidatebalance: number;

  @FieldTypeDecorator()
  accessor couponcode: number;

  @FieldTypeDecorator()
  accessor createdfrom: number;

  @FieldTypeDecorator()
  accessor creditcard: number;

  @FieldTypeDecorator()
  accessor creditcardprocessor: number;

  @FieldTypeDecorator()
  accessor currency: number;

  @FieldTypeDecorator()
  accessor currencyname: string;

  @FieldTypeDecorator()
  accessor currencysymbol: string;

  @FieldTypeDecorator()
  accessor customercode: string;

  @FieldTypeDecorator()
  accessor debitcardissueno: string;

  @FieldTypeDecorator()
  accessor deferredrevenue: number;

  @FieldTypeDecorator()
  accessor discountitem: number;

  @FieldTypeDecorator()
  accessor discountrate: number;

  @FieldTypeDecorator()
  accessor discounttotal: number;

  @FieldTypeDecorator()
  accessor draccount: number;

  @FieldTypeDecorator()
  accessor enddate: Nullable<Date>;

  @FieldTypeDecorator()
  accessor entitynexus: number;

  @FieldTypeDecorator()
  accessor entitytaxregnum: number;

  @FieldTypeDecorator()
  accessor estgrossprofit: number;

  @FieldTypeDecorator()
  accessor estgrossprofitpercent: string;

  @FieldTypeDecorator()
  accessor exchangerate: number;

  @FieldTypeDecorator()
  accessor excludecommission: boolean;

  @FieldTypeDecorator()
  accessor fob: string;

  @FieldTypeDecorator()
  accessor fxaccount: number;

  @FieldTypeDecorator()
  accessor getauth: boolean;

  @FieldTypeDecorator()
  accessor giftcertapplied: number;

  @FieldTypeDecorator()
  accessor handlingcost: number;

  @FieldTypeDecorator()
  accessor handlingtax1rate: string;

  @FieldTypeDecorator()
  accessor handlingtaxcode: number;

  @FieldTypeDecorator()
  accessor ignoreavs: boolean;

  @FieldTypeDecorator()
  accessor ignorecsc: boolean;

  @FieldTypeDecorator()
  accessor inputpnrefnum: string;

  @FieldTypeDecorator()
  accessor intercostatus: number;

  @FieldTypeDecorator()
  accessor intercotransaction: number;

  @FieldTypeDecorator()
  accessor isbasecurrency: boolean;

  @FieldTypeDecorator()
  accessor isdefaultshippingrequest: string;

  @FieldTypeDecorator()
  accessor ismultishipto: boolean;

  @FieldTypeDecorator()
  accessor  ispurchasecard: string;

  @FieldTypeDecorator()
  accessor isrecurringpayment: boolean;

  @FieldTypeDecorator()
  accessor leadsource: number;

  @FieldTypeDecorator()
  accessor linkedtrackingnumbers: string;

  @FieldTypeDecorator()
  accessor message: string;

  @FieldTypeDecorator()
  accessor messagesel: number;

  @FieldTypeDecorator()
  accessor muccpromocodeinstance: string;

  @FieldTypeDecorator()
  accessor nextbill: Nullable<Date>;

  @FieldTypeDecorator()
  accessor nexus: number;

  @FieldTypeDecorator()
  accessor onetime: number;

  @FieldTypeDecorator()
  accessor opportunity: number;

  @FieldTypeDecorator()
  accessor overridehold: boolean;

  @FieldTypeDecorator()
  accessor overrideholdchecked: boolean;

  @FieldTypeDecorator()
  accessor overrideshippingcost: number;

  @FieldTypeDecorator()
  accessor partner: number;

  @FieldTypeDecorator()
  accessor paymenteventdate: Nullable<Date>;

  @FieldTypeDecorator()
  accessor paymenteventholdreason: number;

  @FieldTypeDecorator()
  accessor paymenteventpurchasedatasent: string;

  @FieldTypeDecorator()
  accessor paymenteventresult: number;

  @FieldTypeDecorator()
  accessor paymenteventtype: string;

  @FieldTypeDecorator()
  accessor paymenteventupdatedby: string;

  @FieldTypeDecorator()
  accessor paymentmethod: number;

  @FieldTypeDecorator()
  accessor paypalauthid: string;

  @FieldTypeDecorator()
  accessor paypalprocess: boolean;

  @FieldTypeDecorator()
  accessor paypalstatus: string;

  @FieldTypeDecorator()
  accessor paypaltranid: string;

  @FieldTypeDecorator()
  accessor pnrefnum: string;

  @FieldTypeDecorator()
  accessor promocode: number;

  @FieldTypeDecorator()
  accessor promocodepluginimpl: string;

  @FieldTypeDecorator()
  accessor recognizedrevenue: number;

  @FieldTypeDecorator()
  accessor recurannually: number;

  @FieldTypeDecorator()
  accessor recurmonthly: number;

  @FieldTypeDecorator()
  accessor recurquarterly: number;

  @FieldTypeDecorator()
  accessor recurweekly: number;

  @FieldTypeDecorator()
  accessor returntrackingnumbers: string;

  @FieldTypeDecorator()
  accessor revcommitstatus: string;

  @FieldTypeDecorator()
  accessor revenuestatus: string;

  @FieldTypeDecorator()
  accessor revreconrevcommitment: boolean;

  @FieldTypeDecorator()
  accessor saleseffectivedate: Nullable<Date>;

  @FieldTypeDecorator()
  accessor salesgroup: number;

  @FieldTypeDecorator()
  accessor shipaddresslist: number;

  @FieldTypeDecorator()
  accessor shipcomplete: boolean;

  @FieldTypeDecorator()
  accessor shipdate: Nullable<Date>;

  @FieldTypeDecorator()
  accessor shipisresidential: string;

  @FieldTypeDecorator()
  accessor shipmethod: number;

  @FieldTypeDecorator()
  accessor shipoverride: string;

  @SubRecordDecorator(AddressBase)
  accessor shippingaddress: AddressBase;

  @FieldTypeDecorator()
  accessor shippingcost: number;

  @FieldTypeDecorator()
  accessor shippingcostoverridden: string;

  @FieldTypeDecorator()
  accessor shippingtax1rate: string;

  @FieldTypeDecorator()
  accessor shippingtaxcode: number;

  @FieldTypeDecorator()
  accessor softdescriptor: string;

  @FieldTypeDecorator()
  accessor source: string;

  @FieldTypeDecorator()
  accessor startdate: Nullable<Date>;

  @FieldTypeDecorator()
  accessor subsidiarytaxregnum: number;

  @FieldTypeDecorator()
  accessor subtotal: number;

  @FieldTypeDecorator()
  accessor syncpartnerteams: boolean;

  @FieldTypeDecorator()
  accessor syncsalesteams: boolean;

  @FieldTypeDecorator()
  accessor taxdetailsoverride: boolean;

  @FieldTypeDecorator()
  accessor taxitem: number;

  @FieldTypeDecorator()
  accessor taxrate: number;

  @FieldTypeDecorator()
  accessor taxregoverride: boolean;

  @FieldTypeDecorator()
  accessor taxtotal: number;

  @FieldTypeDecorator()
  accessor terms: number;

  @FieldTypeDecorator()
  accessor threedstatuscode: string;

  @FieldTypeDecorator()
  accessor tobeemailed: boolean;

  @FieldTypeDecorator()
  accessor tobefaxed: boolean;

  @FieldTypeDecorator()
  accessor tobeprinted: boolean;

  @FieldTypeDecorator()
  accessor total: number;

  @FieldTypeDecorator()
  accessor totalcostestimate: number;

  @FieldTypeDecorator()
  accessor tranisvsoebundle: boolean;

  @FieldTypeDecorator()
  accessor unbilledorders: number;

  @FieldTypeDecorator()
  accessor validfrom: string;

  @FieldTypeDecorator()
  accessor vsoeautocalc: boolean;

  @SubListDecorator(ItemSublist)
  accessor item: NSSubList<ItemSublist>;

  @SubListDecorator(SalesTeamSublist)
  accessor salesteam: NSSubList<SalesTeamSublist>;

  override recordType() {
    return record.Type.SALES_ORDER;
  }
}