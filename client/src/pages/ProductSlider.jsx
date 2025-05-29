import React, { useEffect, useRef } from "react";

const fakeProducts = [
  { id: 1, name: "T-Shirt", price: "$19.99", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1450&auto=format&fit=crop" },
  { id: 2, name: "Jeans", price: "$39.99", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1450&auto=format&fit=crop" },
  { id: 3, name: "Hoodie", price: "$29.99", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1450&auto=format&fit=crop" },
  { id: 4, name: "Shorts", price: "$14.99", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1450&auto=format&fit=crop" },
  { id: 5, name: "Sneakers", price: "$49.99", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1450&auto=format&fit=crop" },
  { id: 6, name: "Cap", price: "$9.99", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1450&auto=format&fit=crop" },
];



const ProductSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let speed = 1;
    let animationFrame;

    const scroll = () => {
      container.scrollLeft += speed;

      // Reset scroll position to create infinite effect
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const loopedProducts = [...fakeProducts, ...fakeProducts]; // double items

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Featured Products</h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 w-full overflow-x-scroll scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {loopedProducts.map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className="min-w-[200px] max-w-[200px] bg-white rounded-lg shadow-md p-4 flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-green-600 font-bold">{product.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;