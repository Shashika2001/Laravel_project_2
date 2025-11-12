export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="font-bold">${product.price.toFixed(2)}</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Add to Cart</button>
      </div>
    </div>
  );
}
