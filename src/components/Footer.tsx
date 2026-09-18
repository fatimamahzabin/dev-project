
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand column (takes 5 columns) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm">
              DS
            </div>
            <span className="font-bold text-gray-900 text-base tracking-tight">
              Dev <span className="text-pink-600">Stack</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex items-center space-x-5 text-xs text-gray-600 font-medium pt-1">
            <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Links columns (take remaining 7 columns in total) */}
        <div className="md:col-span-7 grid grid-cols-3 gap-6">
          {/* Product links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}