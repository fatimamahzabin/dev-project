import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans selection:bg-pink-500 selection:text-white">
      <Navbar />
      <Hero />
      <div className="border-t border-gray-100 my-8"></div>
      <Technologies />
    </div>
  );
}