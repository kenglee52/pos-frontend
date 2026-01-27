import { Customer } from "./customer.type";
import { OnlineOrder } from "./onlineOrder";

export interface OnlineBill {
  onlineBillID: number;
  customerID: number;
  logisticType: string;
  logisticName: string;
  onlineBillDate: string;
  send: boolean;
  customer?: Customer;
  onlineOrders?: OnlineOrder[];
}
