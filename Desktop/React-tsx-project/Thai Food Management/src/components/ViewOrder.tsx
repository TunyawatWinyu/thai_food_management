import { useEffect } from "react";
import { type Order } from "../types/order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { getStatusColor } from "../utils/orderUtils";

type viewOrderProps = {
  order: Order;
  onClose: () => void;
};

const ViewOrder = ({ order, onClose }: viewOrderProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-xl rounded-xl bg-gray-100 p-6 shadow-md">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Order {order.id}</p>
          <button
            type="button"
            className="cursor-pointer rounded-full border-2 border-gray-400 px-1.5 font-semibold text-gray-600 transition duration-200 ease-in hover:border-gray-800 hover:text-gray-800"
            onClick={() => {
              onClose();
            }}
          >
            <FontAwesomeIcon size="2xs" icon={faX} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between mt-6">
            {/* Date */}
            <p className="text-gray-500">Date</p>
            <p>
              {order.date} {order.time}
            </p>
          </div>

          {/* Customer */}
          <div className="flex justify-between ">
            <p className="text-gray-500">Customer</p>
            <p>{order.customer}</p>
          </div>

          {/* Type of Order */}
          <div className="flex justify-between ">
            <p className="text-gray-500">Type</p>
            <p>{order.type}</p>
          </div>

          {/* Payment */}
          <div className="flex justify-between ">
            <p className="text-gray-500">Payment</p>
            <p>{order.payment}</p>
          </div>

          {/* State */}
          <div className="flex justify-between ">
            <p className="text-gray-500">State</p>
            <p
              className={` border px-5 rounded-2xl text-sm ${getStatusColor(
                order.state,
              )}`}
            >
              {order.state}
            </p>
          </div>
          <div className="border-b border-b-gray-300"></div>
        </div>
        <div className="my-5 flex flex-col">
          <span className="text-xl font-semibold">Product</span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col my-2">
              {order.product.map((product) => (
                <span className="my-1" key={product.name}>
                  {product.quantity}× {product.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col w-24 text-right">
              {order.product.map((product) => (
                <span className="my-1 font-bold" key={product.name}>
                  {product.price.toFixed(2)} €
                </span>
              ))}
            </div>
          </div>
          <div className="border-b border-b-gray-300"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="text-gray-400 text-md">Subtotal</span>
            <span className="text-sm">
              {order.product
                .reduce((sum, product) => sum + product.total, 0)
                .toFixed(2)}{" "}
              €
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-md font-bold">Total</span>
            <span className="font-bold">
              {order.product
                .reduce((sum, product) => sum + product.total, 0)
                .toFixed(2)}{" "}
              €
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
