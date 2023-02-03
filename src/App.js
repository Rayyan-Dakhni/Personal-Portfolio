import Navbar from "./components/navigation/navbar";
import Hero from "./components/hero";
import About from "./components/about";

function App() {
  return (
    <div className='w-screen min-h-screen bg-gray-100 text-gray-700'>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />

      <About />
    </div>
  );
}

export default App;
