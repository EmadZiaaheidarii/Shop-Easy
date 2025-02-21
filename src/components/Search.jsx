'use client'

import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { SearchIcon, X } from 'lucide-react';

function Search({ products }) {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState('');
  const [opensearch, setOpenSearch] = useState(false);

  const filterProduct = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex items-center bg-white p-6 rounded-2xl shadow-lg border mb-3 border-yellow-300">
      
      <button onClick={() => setOpenSearch(!opensearch)} className="mr-4">
        {opensearch ? <X  size={32} /> : <SearchIcon size={32} />}
      </button>

      

        {opensearch && (
          <>
            <input
              className="w-full p-4 bg-yellow-50 text-brown-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو محصول ..."
            />

            {search && (
              <div className="mt-6 grid grid-cols-4 gap-6">
                {filterProduct.length > 0 ? (
                  filterProduct.map((product) => (
                    <div key={product.id} className="bg-yellow-100 p-6 rounded-lg shadow-md border border-yellow-400">
                      <img className="w-full h-32 rounded-lg mb-4 object-cover border border-yellow-500" src={product.image} alt={product.title} />
                      <h2 className="text-brown-700 font-bold overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
                      <p className="text-brown-600 font-semibold">${product.price}</p>
                      <button
                        onClick={() => {
                          addToCart(product);
                          window.alert("محصول به سبد خرید اضافه شد");
                        }}
                        className="bg-yellow-600 text-white w-full py-2 mt-4 hover:bg-yellow-700 rounded-md transition-all"
                      >
                        Add To Cart
                      </button>
                    </div>
                  ))
                ) : (
                  <h1 className="text-brown-700 text-center">محصولی یافت نشد</h1>
                )}
              </div>
            )}
          </>
        )}
      </div>
    
  );
}

export default Search;
