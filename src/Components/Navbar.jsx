import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky z-99 top-0 bg-gradient-to-b from-purple-950 to-purple-500  text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="/home"
          className="text-2xl font-bold hover:text-white-200 transition-colors"
        >
          ShopApp
        </Link>

        <div className="flex items-center space-x-6">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-4 py-2 rounded  ${
                isActive ? "bg-purple-400" : "hover:bg-purple-500"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink to="/" className="flex items-center space-x-6">
            {" "}
            Sign Up
          </NavLink>

          <NavLink to="/signin" className="flex items-center space-x-6">
            {" "}
            Sign In
          </NavLink>

          <NavLink
            to="/cart"
            className="relative p-2 hover:bg-white-700 rounded transition-colors"
          >
            <span className="text-2xl hover:brightness-150 rounded-full">
              🛒
            </span>

             {totalItems > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
      {totalItems}
    </span>
             )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
