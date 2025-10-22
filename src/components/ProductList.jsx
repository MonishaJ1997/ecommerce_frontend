import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/store";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-[#f47c26] mb-8">
        Our Products
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-1">{p.name}</h4>
                <p className="text-gray-500 mb-2 line-clamp-2">{p.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#f47c26] font-bold text-lg">
                    ₹{p.price}
                  </span>
                  <button
                    onClick={() => dispatch(addToCart(p))}
                    className="bg-[#f47c26] text-white px-4 py-2 rounded-lg hover:bg-[#ff8b3a] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
