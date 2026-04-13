import React from 'react';
import { ShoppingCart, Search, ChevronDown, Layers } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="h-16 bg-[#0B1B3D] text-white flex items-center justify-between px-6 shrink-0 z-50 w-full relative">
      {/* Logo */}
        <div className="flex h-8 min-w-[92px] items-center justify-center overflow-hidden rounded-[50%] bg-white px-3 sm:h-9 sm:min-w-[104px]">
              <img
                src="/stackly-logo1.png"
                alt="Stackly logo"
                className="h-[18px] w-auto sm:h-[20px]"
              />
            </div>
          
 

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-blue-300 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-300 transition-colors">About Us</a>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-300 transition-colors">
          <span>Our Products</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-300 transition-colors">
          <span>Categories</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <a href="#" className="hover:text-blue-300 transition-colors">Contact</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 border border-slate-600 rounded-full px-4 py-1.5 hover:bg-slate-800 transition-colors text-sm cursor-pointer z-50 relative">
          <ShoppingCart className="w-4 h-4" />
          <span>Cart</span>
        </button>
        <button className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer z-50 relative">
          <Search className="w-4 h-4" />
        </button>
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-slate-600 cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="User profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
