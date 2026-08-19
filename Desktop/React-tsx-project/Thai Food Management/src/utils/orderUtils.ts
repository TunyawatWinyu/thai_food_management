import { type OrderStatus } from "../types/order";

export const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-700 border-blue-300";

    case "Confirmed":
      return "bg-blue-100 text-blue-700 border-blue-300";

    case "Preparing":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";

    case "Ready":
      return "bg-violet-100 text-violet-700 border-violet-300";

    case "Delivered":
      return "bg-sky-100 text-sky-700 border-sky-300";

    case "Completed":
      return "bg-green-100 text-green-700 border-green-300";

    case "Cancelled":
      return "bg-red-100 text-red-700 border-red-300";

    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

export const orderType = ["Dine-In", "Takeaway", "Delivery"];
