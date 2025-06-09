import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../Slices/Cart/CartSlice";
import { Button } from "@radix-ui/themes";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center p-4 border-b border-gray-200 last:border-b-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-contain rounded mr-4"
      />

      <div className="flex-1">
        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
        <p className="text-gray-600">{item.category}</p>
        <p className="text-green-600 font-bold">${item.price}</p>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          onClick={() => dispatch(decreaseQuantity(item))}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors font-bold text-lg w-8 h-8 flex items-center justify-center"
        >
          −
        </Button>

        <span className="text-xl font-bold min-w-[3rem] text-center">
          {item.quantity}
        </span>

        <Button
          onClick={() => dispatch(increaseQuantity(item))}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors font-bold text-lg w-8 h-8 flex items-center justify-center"
        >
          +
        </Button>
      </div>

      <div className="ml-4 text-right">
        <p className="text-lg font-bold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
