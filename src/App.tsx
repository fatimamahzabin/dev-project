import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome to my project! 🚀</h1>
      </main>
    </div>
  );
}