import { createContext, useContext, useState, type ReactNode } from "react";
import type { Order, OrderStatus } from "../types/order";
import { orders as initialOrders } from "../data/order";

interface OrderContectType {
  orders: Order[];
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;
}

const OrdersContext = createContext<OrderContectType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((currentStatus) =>
      currentStatus.map((order) =>
        order.id === orderId ? { ...order, state: newStatus } : order,
      ),
    );
  };
  return (
    <OrdersContext.Provider value={{ orders, updateOrderStatus }}>
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
