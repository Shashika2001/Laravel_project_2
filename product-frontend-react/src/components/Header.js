export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">Aahaas Ecommerce</div>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="rounded px-2 py-1" />
        <button aria-label="cart">
          🛒
        </button>
      </div>
    </header>
  );
}
