import { type Menu } from "../types/menu";

type DishCardProps = {
  dish: Menu;
};

const DishCard = ({ dish }: DishCardProps) => {
  const profit = dish.price - dish.production_cost;
  const profitPercentage = (profit / dish.price) * 100;
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Image */}
      <div className="relative">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-52 w-full object-cover"
        />

        <div className="absolute right-3 top-3 rounded-full bg-red-200 px-2 py-1 shadow">
          {"🌶️".repeat(dish.spicy)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex justify-between gap-3">
          <h2 className="text-xl font-bold">{dish.name}</h2>

          <span className="whitespace-nowrap font-bold text-green-800">
            €{dish.price.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-600">{dish.category}</span>

          <p className="mt-2 text-sm text-gray-600">{dish.description}</p>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          <span className="font-bold">Ingredients:</span> {dish.ingredients}
        </p>

        <p className="mt-2 text-xs text-red-500">
          <span className="font-bold">Allergens:</span> {dish.allergens}
        </p>

        {/* Bottom section */}
        <div className="mt-auto flex justify-around pt-5">
          <div className="flex flex-col gap-1 rounded-2xl bg-gray-200 px-4 py-2">
            <p className="text-sm text-gray-500">Cost</p>

            <span className="text-sm font-semibold">
              €{dish.production_cost.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col gap-1 rounded-2xl bg-green-100 px-4 py-2">
            <p className="text-sm text-gray-500">Profit</p>

            <div>
              <span className="text-sm font-semibold text-green-700 mr-2">
                €{profit.toFixed(2)}
              </span>
              <span className="text-xs text-green-600">
                ( {profitPercentage.toFixed(1)}% )
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-b-gray-100"></div>
      <div className="flex justify-between my-5">
        <span className=" text-green-600 text-sm bg-green-100 py-1 px-3 rounded-xl mx-4">
          Attive
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default DishCard;
