import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOrders } from "../contexts/OrderContext";
import { orderStatus } from "../data/orderOptions";
import { type Order, type OrderStatus } from "../types/order";
import { getStatusColor } from "../utils/orderUtils";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ViewOrder from "./ViewOrder";
import EditOrder from "./EditOrder";

const columns = [
  "Number",
  "Date",
  "Customer",
  "Type",
  "Payment",
  "Total",
  "State",
  "Action",
];

const OrderTable = () => {
  const { orders, updateOrderStatus } = useOrders();
  const [showOrder, setShowOrder] = useState<boolean>(false);
  const [showEditOrder, setShowEditOrder] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    console.log("SHOW ORDER:", showOrder);
  }, [showOrder]);
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <table className="w-full">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr className="text-left text-sm text-gray-500">
            {columns.map((column) => {
              const isTotalOrState = column === "Total" || column === "State";
              const isActions = column === "Action";

              return (
                <th
                  key={column}
                  className={` py-2 font-medium ${
                    isActions
                      ? "px-6 text-right"
                      : isTotalOrState
                        ? "px-2"
                        : "px-6"
                  }`}
                >
                  <span>{column}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.id} className="border-b text-sm border-gray-100">
                <td className="px-4 py-2 whitespace-nowrap">{order.id}</td>

                <td className="px-4 py-2 whitespace-nowrap">{order.date}</td>

                <td className="px-4 py-2 whitespace-nowrap">
                  {order.customer}
                </td>

                <td className="px-4 py-2 whitespace-nowrap">{order.type}</td>

                <td className="px-4 py-2 whitespace-nowrap">{order.payment}</td>

                <td className="px-4 py-2 font-bold whitespace-nowrap">
                  {order.product
                    .reduce((sum, product) => sum + product.total, 0)
                    .toFixed(2)}{" "}
                  €
                </td>

                <td className="px-2 py-2 whitespace-nowrap">
                  <select
                    value={order.state}
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value as OrderStatus)
                    }
                    className={`mr-3 border px-2 py-1 rounded-2xl ${getStatusColor(
                      order.state,
                    )}`}
                  >
                    {orderStatus.map((status) => (
                      <option key={status} value={status} className="text-xs">
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="flex px-6 py-2 justify-end">
                  <span
                    className="cursor-pointer py-1 px-2 rounded-2xl transition duration-100 ease-in hover:bg-gray-200"
                    onClick={() => {
                      setSelectedOrder(order);
                      setShowOrder(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faEye} size="sm" />
                  </span>
                  <span
                    className="cursor-pointer py-1 px-2 transition duration-100 rounded-2xl ease-in hover:bg-gray-200"
                    onClick={() => {
                      setShowEditOrder(true);
                      setSelectedOrder(order);
                    }}
                  >
                    <FontAwesomeIcon icon={faPen} size="sm" />
                  </span>
                  <span className="cursor-pointer py-1 px-2 rounded-2xl transition duration-100 ease-in hover:bg-red-200">
                    <FontAwesomeIcon icon={faTrash} size="sm" color="red" />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showOrder && selectedOrder && (
        <ViewOrder
          order={selectedOrder}
          onClose={() => {
            setShowOrder(false);
          }}
        />
      )}
      {showEditOrder && selectedOrder && (
        <EditOrder
          order={selectedOrder}
          onClose={() => {
            setShowEditOrder(false);
          }}
        />
      )}
    </div>
  );
};

export default OrderTable;
