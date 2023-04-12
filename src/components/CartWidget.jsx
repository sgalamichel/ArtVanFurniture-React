import { RiShoppingCart2Fill } from "react-icons/ri";

const CartWidget = () => {
  return (
    <div className="flex items-center">
      <RiShoppingCart2Fill className="text-gray-700 text-2xl mr-2" />
      <span className="text-sm font-medium"></span>
    </div>
  );
};

export default CartWidget;




