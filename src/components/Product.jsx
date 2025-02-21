'use client'

import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext';
import { CommentContext } from '../contexts/CommentContext';

function Product({ product }) {
  const [productComment, setProductComment] = useState('');
  const { addToCart } = useContext(CartContext);
  const { sendcomment } = useContext(CommentContext);

  const handleComment = async () => {
    if (!productComment) {
      alert('لطفا یک کامنت وارد کنید');
      return;
    }
    await sendcomment(productComment, product.title);
    setProductComment('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl h-full shadow-xl w-64 border border-yellow-300 transition-all hover:shadow-2xl">
      <img
        className='w-full rounded-xl mb-4 h-40 object-cover border border-yellow-400'
        src={product.image}
        alt={product.title}
      />
      <h2 className='text-brown-700 font-semibold text-lg truncate'>{product.title}</h2>
      <p className='text-brown-500 font-bold text-md mt-2'>${product.price}</p>

      <button
        onClick={() => {
          addToCart(product);
          window.alert("محصول به سبد خرید اضافه شد");
        }}
        className='bg-yellow-600 text-white w-full py-2 mt-4 hover:bg-yellow-700 rounded-lg transition-all'
      >
        Add To Cart
      </button>

      <Link
        className='bg-yellow-500 text-brown-900 w-full py-2 mt-2 text-center rounded-lg hover:bg-yellow-600 block transition-all'
        href={`/${product.id}`}
      >
        View More
      </Link>

      <div className='mt-4'>
        <textarea
          className='w-full h-16 p-2 text-end border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all'
          value={productComment}
          onChange={(e) => setProductComment(e.target.value)}
          placeholder="نظر خود را بنویسید..."
        />
        <button
          className='w-full py-2 bg-yellow-400 text-white rounded-lg mt-2 hover:bg-yellow-700 transition-all'
          type="button"
          onClick={handleComment}
        >
          Send Comments        </button>
      </div>
    </div>
  )
}

export default Product;
