import Navbar from "../components/Navbar";
import { menu } from "../data/menu";
import DishCard from "../components/DishCard";

const Orders = () => {
  const quantityOfDishes = menu.length;

  return (
    <main>
      <Navbar />

      <div className="p-5">
        <h1 className="text-3xl font-bold">Menu</h1>

        <div className="flex w-full items-center justify-between">
          <p className="text-gray-600">
            {quantityOfDishes > 1
              ? `${quantityOfDishes} Dishes`
              : `${quantityOfDishes} Dish`}
          </p>

          <div>
            <input
              type="text"
              placeholder="Search by name"
              className="w-80 rounded-lg border border-gray-300 px-4 py-2"
            />

            <button className="mx-3 cursor-pointer rounded-xl bg-thai-light-green px-4 py-2 text-white hover:bg-thai-green">
              + New Dish
            </button>
          </div>
        </div>

        {/* Dishes */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Orders;
