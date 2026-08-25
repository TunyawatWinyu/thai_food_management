import { type Order } from "../types/order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { orders } from "../data/order";
import { orderStatus, orderType, paymentType } from "../data/orderOptions";
import { useOrders } from "../contexts/OrderContext";
import { menu } from "../data/menu";
import { useEffect } from "react";

type EditOrderPropos = {
  order: Order;
  onClose: () => void;
};

const formatDateForInput = (date: string) => {
  const [day, month, year] = date.split(" ");

  const months: Record<string, string> = {
    gen: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    mag: "05",
    giu: "06",
    lug: "07",
    ago: "08",
    set: "09",
    ott: "10",
    nov: "11",
    dic: "12",
  };

  return `${year}-${months[month]}-${day.padStart(2, "0")}`;
};

const EditOrder = ({ order, onClose }: EditOrderPropos) => {
  const { formData, setFormData } = useOrders();

  const handlerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlerDeleteProduct = (dishId: number) => {
    setFormData({
      ...formData,
      product: formData.product.filter((product) => product.id !== dishId),
    });
  };

  const handlerAddProduct = () => {
    const selectedDish = menu.find((dish) => dish.name === formData.dish);

    if (!selectedDish) return;

    const existingDish = formData.product.find(
      (dish) => dish.id === selectedDish.id,
    );

    setFormData({
      ...formData,
      product: existingDish
        ? formData.product.map((product) =>
            product.id === selectedDish.id
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                  price: product.quantity * product.price,
                }
              : product,
          )
        : [
            ...formData.product,
            {
              id: selectedDish.id,
              quantity: 1,
              name: selectedDish.name,
              price: selectedDish.price,
              total: selectedDish.price,
            },
          ],
      dish: "",
    });

    console.log(formData.product);
  };

  useEffect(() => {
    setFormData({
      customer: order.customer,
      order: order.type,
      date: formatDateForInput(order.date),
      time: order.time,
      dish: order.dish ?? "",
      product: order.product,
      payment: order.payment,
      state: order.state,
      discount: order.discount ?? 0,
      note: order.note ?? "",
    });
  }, [order, setFormData]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <form
          className="w-full max-w-3xl rounded-xl bg-gray-100 p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between mb-6">
            <h2 className=" text-2xl font-semibold">Edit Order</h2>
            <button
              type="button"
              className="cursor-pointer rounded-full border-2 border-gray-400 px-2 font-semibold text-gray-600 transition duration-200 ease-in hover:border-gray-800 hover:text-gray-800"
              onClick={() => {
                onClose();
              }}
            >
              <FontAwesomeIcon size="2xs" icon={faX} />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              {/* Customer */}
              <label className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">Customer</span>

                <select
                  name="customer"
                  value={order.customer}
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
                  value={order.type}
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
                  value={formatDateForInput(order.date)}
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
                  value={order.time}
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
                value={order.dish}
                onChange={handlerChange}
                className="rounded-lg border border-gray-300 px-3 py-2 outline-none"
                onClick={handlerAddProduct}
              >
                <option value="">Select a Dish...</option>
                {menu.map((dish) => {
                  return (
                    <option key={dish.id} value={dish.name}>
                      {dish.name}
                    </option>
                  );
                })}
              </select>

              {formData.product.length > 0 ? (
                <div className="flex flex-col">
                  {formData.product.map((product) => {
                    const totalPrice = product.price * product.quantity;
                    return (
                      <div
                        key={product.id}
                        className="flex items-center justify-between border border-gray-300 px-4 py-4 first:rounded-t-2xl last:rounded-b-2xl"
                      >
                        <div className="flex flex-col">
                          <p className="text-sm font-semibold">
                            {product.name}
                          </p>

                          <span className="text-sm text-gray-500">
                            {product.price.toFixed(2)} €
                          </span>
                        </div>

                        <div className="flex w-60 items-center justify-between">
                          <span className=" w-8 text-center">
                            <span className="border border-gray-200 py-1 px-2.5 mx-3 rounded-2xl cursor-pointer transition duration-200 hover:bg-gray-300">
                              -
                            </span>
                            {product.quantity}
                            <span className="border border-gray-300 py-1 px-2 mx-3 rounded-2xl cursor-pointer transition duration-200 hover:bg-gray-300">
                              +
                            </span>
                          </span>

                          <div className="flex items-center w-36">
                            <span className="w-24 text-right font-bold">
                              {totalPrice.toFixed(2)} €
                            </span>

                            <span
                              className="ml-4 w-6 text-center cursor-pointer"
                              onClick={() => handlerDeleteProduct(product.id)}
                            >
                              <FontAwesomeIcon
                                size="sm"
                                icon={faTrash}
                                color="red"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
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
                  value={order.state}
                  onChange={handlerChange}
                  className="rounded-lg border border-gray-400 px-3 py-2 outline-none"
                >
                  {orderStatus.map((state) => {
                    return (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    );
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
                  value={order.discount}
                  onChange={handlerChange}
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none"
                />
              </label>
              {/* Note */}
              <label className="flex flex-col gap-4">
                <span className="text-sm text-gray-300">Note</span>
                <input
                  name="note"
                  value={order.note}
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
    </div>
  );
};

export default EditOrder;
