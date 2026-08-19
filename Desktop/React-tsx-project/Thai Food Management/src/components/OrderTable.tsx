import { useOrders } from "../contexts/OrderContext";
import { orderStatus } from "../data/orderOptions";
import { type OrderStatus } from "../utils/orderUtils";
import { getStatusColor } from "../utils/orderUtils";

const columns = [
  "Number",
  "Date",
  "Customer",
  "Type",
  "Payment",
  "Total",
  "State",
  "Azioni",
];

const OrderTable = () => {
  const { orders, updateOrderStatus } = useOrders();

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <table className="w-full">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr className="text-left text-sm text-gray-500">
            {columns.map((column) => {
              const isTotalOrState = column === "Total" || column === "State";

              return (
                <th
                  key={column}
                  className={`py-4 font-medium ${
                    isTotalOrState ? "px-2" : "px-6"
                  }`}
                >
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.id} className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium">{order.id}</td>

                <td className="px-6 py-4">{order.date}</td>

                <td className="px-6 py-4">{order.customer}</td>

                <td className="px-6 py-4">{order.type}</td>

                <td className="px-6 py-4">{order.payment}</td>

                <td className="px-6 py-4 font-medium">{order.total} €</td>

                <td className="px-2 py-4">
                  <select
                    value={order.state}
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value as OrderStatus)
                    }
                    className={`mr-3  border px-2 py-1 rounded-xl ${getStatusColor(
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
