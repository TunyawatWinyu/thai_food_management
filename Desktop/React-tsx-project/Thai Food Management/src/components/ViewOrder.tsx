import { useEffect } from "react";
import { type Order } from "../types/order";

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
        <div className="flex justify-between">
          <h2>{order.id}</h2>
          <button
            type="button"
            className="cursor-pointer rounded-full border-2 border-gray-400 px-2 pb-1 font-semibold text-gray-600 transition duration-200 ease-in hover:border-gray-800 hover:text-gray-800"
            onClick={() => {
              console.log("CLICK X");
              onClose();
            }}
          >
            X
          </button>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ViewOrder;
