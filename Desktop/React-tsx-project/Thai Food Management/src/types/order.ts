export interface Order {
  id: string;
  date: string;
  customer: string;
  type: OrderType;
  payment: PaymentType;
  total: number;
  state: OrderStatus;
}

export type PaymentType = "Bancomat" | "Card" | "Cash" | "Online";

export type OrderType = "Takeaway" | "Delivery" | "Dine-In";

export type OrderStatus =
  | "New"
  | "Confirmed"
  | "Preparing"
  | "Ready"
  | "Delivered"
  | "Completed"
  | "Cancelled";
