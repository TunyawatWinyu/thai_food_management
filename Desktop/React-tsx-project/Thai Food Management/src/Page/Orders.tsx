import Navbar from "../components/Navbar";
import { orderStatus, orderType } from "../data/orderOptions";
import { useOrders } from "../contexts/OrderContext";
import OrderTable from "../components/OrderTable";
import { useState } from "react";
import NewOrderForm from "../components/NewOrderForm";

const Orders = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { orders } = useOrders();
  return (
    <main>
      <Navbar />
      <div className="p-5">
        <h1 className="text-3xl font-bold">Orders</h1>

        <div className="flex w-full items-center justify-between ">
          <p className=" text-gray-600">{orders.length} ordini</p>

          <div>
            <input
              type="text"
              placeholder="Search by number or customer"
              className="w-80 rounded-lg border border-gray-300 px-4 py-2"
            />
            <button
              onClick={() => setShowForm(true)}
              className="cursor-pointer mx-3 bg-thai-light-green text-white py-2 px-4 rounded-xl hover:bg-thai-green"
            >
              + New Order
            </button>
            {showForm && <NewOrderForm onClose={() => setShowForm(false)} />}
          </div>
        </div>
        <div className="my-5">
          <select className="mr-3 rounded-md border border-gray-300 px-2 py-1">
            <option value="">Tutti gli stati</option>

            {orderStatus.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select className="mr-3 rounded-md border border-gray-300 px-2 py-1">
            <option value="">Tutti i tipi</option>

            {orderType.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <OrderTable />
      </div>
    </main>
  );
};

export default Orders;
