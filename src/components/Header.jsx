'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { ShoppingCart, HomeIcon, Instagram, Phone, X, Menu } from 'lucide-react';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
      <div className="bg-yellow-100 fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 shadow-md shadow-yellow-300">
        
       
        <div className="md:hidden">
          {menuOpen ? (
            <X size={40} className="text-brown-700 cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={40} className="text-brown-700 cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        
        <div className="text-3xl font-semibold text-black shadow-lg shadow-yellow-400 absolute left-1/2 transform -translate-x-1/2">
        Shop Easy
        </div>

        
        <div className="hidden md:flex w-full justify-between items-center px-6">
          <div className="flex gap-6">
            <Link href="/" className="text-brown-700 hover:text-yellow-700 transition-colors">
              <HomeIcon size={40} />
            </Link>
            <Link className="hover:text-yellow-700" href="https://www.instagram.com/vended.e">
              <Instagram size={40} />
            </Link>
          </div>
          
          <div className="flex gap-6">
            <div className="relative group">
              <Phone size={40} className="text-brown-700 hover:text-yellow-700 transition-colors" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-200 text-black px-4 py-2 rounded-lg shadow-lg border border-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                09900108486
              </span>
            </div>
            <Link href="/cart" className="text-brown-700 hover:text-yellow-700 transition-colors">
              <ShoppingCart size={40} />
            </Link>
          </div>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-yellow-100 shadow-lg p-4 flex flex-col gap-4 items-center z-40">
          <Link href="/" className="text-brown-700 hover:text-yellow-700 transition-colors" onClick={() => setMenuOpen(false)}>
            <HomeIcon size={40} />
          </Link>
          <Link className="hover:text-yellow-700" href="https://www.instagram.com/vended.e" onClick={() => setMenuOpen(false)}>
            <Instagram size={40} />
          </Link>
          <div className="relative group">
            <Phone size={40} className="text-brown-700 hover:text-yellow-700 transition-colors" />
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-200 text-black px-4 py-2 rounded-lg shadow-lg border border-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              09900108486
            </span>
          </div>
          <Link href="/cart" className="text-brown-700 hover:text-yellow-700 transition-colors" onClick={() => setMenuOpen(false)}>
            <ShoppingCart size={40} />
          </Link>
        </div>
      )}

      <br /><br /><br />
    </>
  );
}

export default Home;
