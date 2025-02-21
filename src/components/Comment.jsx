import React from 'react'

async function Comment() {
  const res = await fetch('http://localhost:3001/Comment/')
  const data = await res.json()
  return (
    <div className="bg-white m-2 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        data.map((data) => (
          <div key={data.id} className="bg-white mt-3 p-4 text-base rounded-2xl shadow-md hover:shadow-2xl transition-shadow">
            <h1 className='mb-2 text-center text-yellow-800 font-semibold overflow-hidden text-ellipsis whitespace-nowrap'>{data.title}</h1>
            <textarea 
              value={data.payam} 
              className='bg-yellow-400 font-semibold border-2 border-yellow-500 text-sm text-end shadow-lg rounded-2xl w-full h-32 mb-5 resize-none'
              readOnly
            >
              {data.payam}
            </textarea>
          </div>
        ))
      }
    </div>
  )
}

export default Comment
