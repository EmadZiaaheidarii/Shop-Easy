'use client'

import React, { useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

function Peymet() {

    const {formSubmit, submit, setFormSubmit } = useContext(CartContext)
 const [showform , setShowForm] = useState(false)

    const handleChange = (e) => {
        const { value, name } = e.target
        setFormSubmit(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handeSubmit =(e)=>{
 e.preventDefault();
 setShowForm(true)
 setFormSubmit({
    city : '',
    CodeMeli : '',
    Address : '',
    phoneNumber: ''
 })
 alert('با موفقیت ارسال شد')
 
return submit;
    }
  return (
    <>
 <div className="bg-yellow-100 min-h-screen flex flex-col justify-between"> 

    <div className="mt-8 flex justify-center items-center flex-1">
                    <form onSubmit={handeSubmit} className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto">
                        <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-700">Enter Your Information</h2>

                        <div className="mb-6">
                            <label htmlFor="city" className="block text-lg font-medium text-gray-700 mb-2">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formSubmit.city}
                                onChange={handleChange}
                                className="w-full p-4 border-2 border-yellow-400 rounded-lg focus:ring-4 focus:ring-yellow-300 transition-all"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="CodeMeli" className="block text-lg font-medium text-gray-700 mb-2">National ID</label>
                            <input
                                type="text"
                                id="CodeMeli"
                                name="CodeMeli"
                                value={formSubmit.CodeMeli}
                                onChange={handleChange}
                                className="w-full p-4 border-2 border-yellow-400 rounded-lg focus:ring-4 focus:ring-yellow-300 transition-all"
                                required
                            />
                        </div>

                        <div className="flex gap-x-4 mb-6">
                            <div className="flex-1">
                                <label htmlFor="phoneNumber" className="text-lg font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formSubmit.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-yellow-400 rounded-lg focus:ring-4 focus:ring-yellow-300 transition-all"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="Address" className="text-lg font-medium text-gray-700 mb-2">Address</label>
                                <input
                                    type="text"
                                    id="Address"
                                    name="Address"
                                    value={formSubmit.Address}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-yellow-400 rounded-lg focus:ring-4 focus:ring-yellow-300 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <button
            
                                type="submit"
                                className="bg-yellow-600 text-white px-8 py-3 rounded-xl hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all"
                            >
                                Submit
                            </button>

                        </div>
                    </form>
                </div>

          
        </div>
    </>
  )
}

export default Peymet
