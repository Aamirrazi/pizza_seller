import { formatCurrency } from "../../utilities/helpers";
import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./updateQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} quantity={quantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
