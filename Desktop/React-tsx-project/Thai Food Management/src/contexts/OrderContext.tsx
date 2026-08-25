import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Order, OrderStatus } from "../types/order";
import { orders as initialOrders } from "../data/order";
import { type FormErrors } from "../types/order";
import { type FormData } from "../types/order";

interface OrderContextType {
  orders: Order[];
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formValidation: () => FormErrors;
}

const OrdersContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const now = new Date();
  const date = now.toLocaleDateString("en-CA").replaceAll("/", "-");
  const time = now.toLocaleDateString("it-IT", {
    minute: "2-digit",
    hour: "2-digit",
  });
  const [formData, setFormData] = useState<FormData>({
    customer: "",
    order: "",
    date: date,
    time: time,
    dish: "",
    product: [],
    payment: "",
    state: "",
    discount: 0,
    note: "",
  });
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((currentStatus) =>
      currentStatus.map((order) =>
        order.id === orderId ? { ...order, state: newStatus } : order,
      ),
    );
  };

  const formValidation = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.customer) {
      errors.customer = "Select a customer";
    }
    if (!formData.order) {
      errors.order = "Select a type of order";
    }
    if (!formData.date) {
      errors.date = "Salect a date";
    }
    if (!formData.time) {
      errors.time = "Select a time";
    }

    return errors;
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        updateOrderStatus,
        formData,
        setFormData,
        formValidation,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);

  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }

  return context;
};
