import { orders } from "../data/order";
import { orderStatus, orderType, paymentType } from "../data/orderOptions";
import { useOrders } from "../contexts/OrderContext";
import { menu } from "../data/menu";

type NewOrderFormProps = {
  onClose: () => void;
};

const NewOrderForm = ({ onClose }: NewOrderFormProps) => {
  const { formData, setFormData, formValidation } = useOrders();

  const handlerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errros = formValidation();

    if (Object.keys(errros).length > 0) {
      console.log(errros);
      return;
    }

    console.log("form validato");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <form
        className="w-full max-w-3xl rounded-xl bg-gray-100 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handlerSubmit}
      >
        <div className="flex justify-between mb-6">
          <h2 className=" text-2xl font-semibold">New Order</h2>
          <button
            type="button"
            className="cursor-pointer rounded-2xl border-2 border-gray-600 px-2 font-semibold text-gray-600 transition duration-200 ease-in hover:border-gray-800 hover:text-gray-800"
            onClick={() => {
              console.log("CLICK X");
              onClose();
            }}
          >
            X
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2">
            {/* Customer */}
            <label className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">Customer</span>

              <select
                name="customer"
                value={formData.customer}
                onChange={handlerChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
              >
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

            {/* Order */}
            <label className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">Order Type</span>
              <select
                name="order"
                value={formData.order}
                onChange={handlerChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none"
              >
                <option value="">Select a type of Order</option>
                {orderType.map((type) => {
                  return (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* Date */}
            <label className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">Date</span>

              <input
                value={formData.date}
                onChange={handlerChange}
                type="date"
                name="date"
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
              />
            </label>

            {/* Time */}
            <label className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">Time</span>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handlerChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none"
              />
            </label>
          </div>
          {/* Add Product */}
          <label className="flex flex-col gap-4">
            <span className="text-sm text-gray-400">Add Product</span>
            <select
              name="dish"
              value={formData.dish}
              onChange={handlerChange}
              className="rounded-lg border border-gray-300 px-3 py-2 outline-none"
            >
              <option value="">Select a Dish...</option>
              {menu.map((dish) => {
                return <option value={dish.name}>{dish.name}</option>;
              })}
            </select>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {/* Payment */}
            <label className="flex flex-col gap-4">
              <span className="text-sm text-gray-400">Payment</span>
              <select
                name="payment"
                value={formData.payment}
                onChange={handlerChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none"
              >
                {paymentType.map((p) => {
                  return (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  );
                })}
              </select>
            </label>
            {/* State */}
            <label className="flex flex-col gap-4">
              <span className="text-sm text-gray-400">State</span>
              <select
                name="state"
                value={formData.state}
                onChange={handlerChange}
                className="rounded-lg border border-gray-400 px-3 py-2 outline-none"
              >
                {orderStatus.map((state) => {
                  return <option value={state}>{state}</option>;
                })}
              </select>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* Discount */}
            <label className="flex flex-col gap-4">
              <span className="text-sm text-gray-400">Discount (€)</span>
              <input
                name="discount"
                value={formData.discount}
                onChange={handlerChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none"
              />
            </label>
            {/* Note */}
            <label className="flex flex-col gap-4">
              <span className="text-sm text-gray-300">Note</span>
              <input
                name="note"
                value={formData.note}
                onChange={handlerChange}
                className="rounded-lg border border-gray-400 px-3 py-2 outline-none"
              />
            </label>
          </div>
          {/* Divider Line */}
          <div className="border-b border-gray-300 mt-2"></div>

          {/* Total Price */}
          <div className="flex justify-between ">
            <h3 className="text-gray-500">Total</h3>
            <p className="font-bold text-xl">0,00 € </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 cursor-pointer px-4 py-2 font-medium hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-thai-light-green px-4 py-2 font-medium cursor-pointer text-white hover:bg-thai-green"
          >
            Save Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewOrderForm;
