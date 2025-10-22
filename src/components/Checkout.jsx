import axios from "../api/axios";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const placeOrder = async () => {
    try {
      await axios.post("orders/", { cart });
      alert("✅ Order placed successfully!");
    } catch {
      alert("❌ Order failed!");
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-[#f47c26] mb-6 text-center">
          Checkout
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty 🛒</p>
        ) : (
          <>
            <div className="divide-y divide-gray-200 mb-6">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3 text-gray-700"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-600">₹{item.price}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-lg font-semibold mb-6">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-[#f47c26] hover:bg-[#ff8b3a] text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
