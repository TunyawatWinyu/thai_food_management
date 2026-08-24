export interface Order {
  id: string;
  date: string;
  customer: string;
  type: OrderType;
  payment: PaymentType;
  total: number;
  state: OrderStatus;
  dish?: string;
  discount?: number;
  note?: string;
}

export interface FormData {
  customer: string;
  order: string;
  date: string;
  time: string;
  dish: string;
  payment: string;
  state: string;
  discount: number;
  note: string;
}

export type FormErrors = {
  customer?: string;
  order?: string;
  date?: string;
  time?: string;
  dish?: string;
  payment?: string;
  state?: string;
  discount?: number;
  note?: string;
};

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
