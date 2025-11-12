import { useState } from 'react';

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="font-bold">${product.price.toFixed(2)}</span>
        <button onClick={handleAddToCart} className={`text-white px-3 py-1 rounded ${added ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}>{added ? 'Added!' : 'Add to Cart'}</button>
      </div>
    </div>
  );
}
