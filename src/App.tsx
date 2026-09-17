import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-500 selection:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}