import Header from './components/Header';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner />
      <main className="flex-grow">
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
