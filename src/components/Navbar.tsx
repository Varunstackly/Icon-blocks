"use client";

import React, { useState } from 'react';
import { ShoppingCart, Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => { setIsProductsOpen(!isProductsOpen); setIsCategoriesOpen(false); };
  const toggleCategories = () => { setIsCategoriesOpen(!isCategoriesOpen); setIsProductsOpen(false); };
  const toggleCart = () => alert('Cart functionality coming soon');
  const toggleWishlist = () => alert('Wishlist functionality coming soon');
  const toggleSearchBar = () => alert('Search functionality coming soon');
  const openContactModal = () => alert('Contact Modal coming soon');
  const scrollToTemplate = (id: string | undefined) => console.log('Scrolling to:', id);

  return (
    <nav className="sticky top-0 z-50 bg-[#06224C] border-b border-white/10 px-2 md:px-12 py-3 shadow-sm">
      <div className="flex items-center justify-between w-full h-full mx-auto">
        <div className="flex items-center gap-1 md:gap-8">
          <button onClick={toggleMobileMenu} className="lg:hidden text-white focus:outline-none p-1" type="button" aria-label="Open mobile menu">
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl transition-transform`}></i>
          </button>
 
          <div className="flex-shrink">
            <a href="#home" tabIndex={-1} className="bg-white px-2 md:px-4 py-2 md:py-3 rounded-[60%] flex items-center justify-center shadow-md transition hover:scale-80 min-w-[75px] md:min-w-[90px] aspect-[2/1]">
              <img src="/stackly-logo1.png" alt="Stackly Logo" className="h-3 md:h-5 w-auto object-contain" decoding="async" />
            </a>
          </div>
 
          <div className="hidden lg:flex gap-x-4 xl:gap-x-8 text-[13px] font-bold text-white uppercase tracking-wide items-center flex-wrap justify-center">
            <a href="./page-not-found.html" className="relative group hover:text-blue-300 transition-colors whitespace-nowrap"><span className="relative z-10">Home</span><span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span></a>
            <a href="./page-not-found.html" className="relative group hover:text-blue-300 transition-colors whitespace-nowrap"><span className="relative z-10">About Us</span><span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span></a>
 
            <div className="relative dropdown-group flex items-center">
              <button type="button" onClick={toggleProducts} id="products-dropdown-btn" aria-haspopup="true" aria-expanded={isProductsOpen} className="flex items-center gap-1.5 hover:text-blue-300 transition whitespace-nowrap text-[13px] font-bold text-white uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-1">
                Our Products <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <div id="products-menu" role="menu" className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl transition-all duration-300 z-[100] py-3 border border-gray-100 ${isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <a href="#404" role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 drop-shadow-sm">PREMIUM TEMPLATES</a>
                <a href="#404" role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 drop-shadow-sm">UI KITS</a>
                <a href="#404" role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 drop-shadow-sm">WORDPRESS THEMES</a>
                <a href="#404" role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 drop-shadow-sm">FREE ASSETS</a>
              </div>
            </div>
 
            <div className="relative dropdown-group flex items-center">
              <button type="button" onClick={toggleCategories} id="category-dropdown-btn" aria-haspopup="true" aria-expanded={isCategoriesOpen} className="flex items-center gap-1.5 hover:text-blue-300 transition whitespace-nowrap text-[13px] font-bold text-white uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-1">
                Categories <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <div id="category-menu" role="menu" className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl transition-all duration-300 z-[100] py-3 border border-gray-100 ${isCategoriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <a href="#all-templates-wrapper" onClick={() => scrollToTemplate('portfolio')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50">PORTFOLIO</a>
                <a href="#all-templates-wrapper" onClick={() => scrollToTemplate('ecommerce')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50">STORE</a>
                <a href="#all-templates-wrapper" onClick={() => scrollToTemplate('business')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50">BUSINESS</a>
                <a href="#all-templates-wrapper" onClick={() => scrollToTemplate('construction')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50">CONSTRUCTION</a>
                <a href="#all-templates-wrapper" onClick={() => scrollToTemplate('fashion')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50">FASHION</a>
                <a href="#all-templates-wrapper" onClick={() => scrollToTemplate('jewelry')} role="menuitem" className="block px-5 py-2.5 text-gray-800 text-[11px] font-black hover:bg-blue-50 hover:text-blue-600">JEWELRY</a>
              </div>
            </div>
 
            <a href="#" onClick={(e) => { e.preventDefault(); openContactModal(); }} className="hover:text-blue-300 transition whitespace-nowrap">Contact</a>
          </div>
        </div>
 
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
          <button onClick={toggleCart} className="relative flex items-center gap-1 border border-white/30 rounded-full px-2 md:px-4 py-1.5 text-white text-[10px] md:text-xs font-semibold hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md" type="button">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="hidden sm:inline">Cart</span>
            <span id="cartBadge" className="hidden absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
 
          <button onClick={toggleWishlist} className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full text-red-500 hover:bg-red-50 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0" type="button" aria-label="Open wishlist">
            <i className="fa-solid fa-heart text-xs md:text-sm"></i>
          </button>
 
          <button onClick={toggleSearchBar} className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full text-[#06224C] hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0" type="button" aria-label="Open search">
            <i className="fa-solid fa-magnifying-glass text-xs md:text-sm"></i>
          </button>
 
          <button type="button" aria-label="User Profile" className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white/40 overflow-hidden cursor-pointer flex-shrink-0 relative focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#06224C] hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-md hover:border-white/80">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User Profile Picture" className="w-full h-full object-cover block" decoding="async" />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      <div 
        id="mobile-menu" 
        role="menu" 
        className={`absolute top-[100%] left-0 w-full bg-[#06224C] border-t border-white/10 p-4 flex flex-col gap-4 lg:hidden z-40 shadow-xl transition-all duration-300 origin-top overflow-hidden ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 p-0 hidden'}`}
      >
        <a role="menuitem" href="./page-not-found.html" className="font-bold text-white uppercase hover:text-blue-400 hover:pl-2 transition-all duration-300 px-2 py-1" onClick={toggleMobileMenu}>Home</a>
        <a role="menuitem" href="./page-not-found.html" className="font-bold text-white uppercase hover:text-blue-400 hover:pl-2 transition-all duration-300 px-2 py-1" onClick={toggleMobileMenu}>About Us</a>
        <button role="menuitem" className="text-left font-bold text-white uppercase hover:text-blue-400 hover:pl-2 transition-all duration-300 px-2 py-1 flex items-center justify-between" onClick={toggleProducts}>
          Our Products <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}></i>
        </button>
        {isProductsOpen && (
          <div className="pl-4 flex flex-col gap-2">
            <a href="#404" className="text-[11px] font-black hover:text-blue-300 text-white/80" onClick={toggleMobileMenu}>PREMIUM TEMPLATES</a>
            <a href="#404" className="text-[11px] font-black hover:text-blue-300 text-white/80" onClick={toggleMobileMenu}>UI KITS</a>
            <a href="#404" className="text-[11px] font-black hover:text-blue-300 text-white/80" onClick={toggleMobileMenu}>WORDPRESS THEMES</a>
            <a href="#404" className="text-[11px] font-black hover:text-blue-300 text-white/80" onClick={toggleMobileMenu}>FREE ASSETS</a>
          </div>
        )}
        <button role="menuitem" className="text-left font-bold text-white uppercase hover:text-blue-400 transition-all px-2 py-1 flex items-center justify-between" onClick={toggleCategories}>
          Categories <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`}></i>
        </button>
        {isCategoriesOpen && (
          <div className="pl-4 flex flex-col gap-2">
            <a href="#all-templates-wrapper" className="text-[11px] font-black hover:text-blue-300 text-white/80" onClick={() => { scrollToTemplate('portfolio'); toggleMobileMenu(); }}>PORTFOLIO</a>
            <a href="#all-templates-wrapper" className="text-[11px] font-black hover:text-blue-300 text-white/80" onClick={() => { scrollToTemplate('ecommerce'); toggleMobileMenu(); }}>STORE</a>
            <a href="#all-templates-wrapper" className="text-[11px] font-black hover:text-blue-300 text-white/80" onClick={() => { scrollToTemplate('business'); toggleMobileMenu(); }}>BUSINESS</a>
          </div>
        )}
        <a role="menuitem" href="#" className="font-bold text-white uppercase hover:text-blue-400 transition-all px-2 py-1" onClick={(e) => { e.preventDefault(); openContactModal(); toggleMobileMenu(); }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
