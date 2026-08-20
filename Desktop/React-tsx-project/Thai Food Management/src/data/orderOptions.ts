import {
  type OrderStatus,
  type OrderType,
  type PaymentType,
} from "../types/order";

export const orderStatus: OrderStatus[] = [
  "New",
  "Confirmed",
  "Preparing",
  "Ready",
  "Delivered",
  "Completed",
  "Cancelled",
];
export const orderType: OrderType[] = ["Takeaway", "Delivery", "Dine-In"];
export const paymentType: PaymentType[] = [
  "Bancomat",
  "Card",
  "Cash",
  "Online",
];
