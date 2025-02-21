import React from 'react'
import Product from './Product'
import Search from './Search'
import Comment from './Comment'
import ImageSlider from './imageSlider'


function ProductList({ products }) {
  return (
    <>
      <div className="mt-2 w-full">
        <Search products={products} />
      </div>
      <div className='bg-yellow-100'>
        <ImageSlider/>
      </div>

      <div className="grid grid-cols-4 mt-3 rounded-lg bg-yellow-100 shadow-2xl border border-yellow-300 p-4 justify-center gap-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-yellow-400">
            <Product product={product} />
          </div>
        ))}
      </div>

      <div className='bg-yellow-600  mb-3 m-2 rounded-md shadow-md text-2xl font-extrabold text-center text-white  p-4'>
      User Comments
        <Comment />
      </div>
    </>
  )
}

export default ProductList;
