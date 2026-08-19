import { orders } from "../data/order";
import { orderType } from "../data/orderOptions";

type NewOrderFormProps = {
  onClose: () => void;
};

const NewOrderForm = ({ onClose }: NewOrderFormProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <form
        className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-6 text-2xl font-semibold">New Order</h2>

        <div className="flex justify-between items-center">
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-400">Customer</span>

            <select className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500">
              <option value="">Customer at the counter</option>

              {orders.map((customer) => {
                return (
                  <option key={customer.id} value={customer.customer}>
                    {customer.customer}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-400">Order Type</span>
            <select className="rounded-lg border border-gray-300 px-3 py-2 outline-none">
              {orderType.map((type) => {
                return <option value={type}>{type}</option>;
              })}
            </select>
          </label>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Create Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewOrderForm;
