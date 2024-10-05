import React from 'react'
import { Link } from 'react-router-dom'
import bookpic from '../assets/Book/bookLogo.jpg'
const PromoBanner = () => {
    return (
        <div className='mt-16 py-12  bg-green-100 px-4 lg: px-24' >
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-6 leading-snug'>
                        2023 National Books Awards from Fiction Shortlist
                    </h2>
                    <Link to="/shop" className="mt-8 block" ><button className='bg-green-700 p-4 text-white font-semibold rounded hover:bg-black transition-all duration-300'>Get Promo</button></Link>
                </div>

                <div>
                    <img src={bookpic} alt="bookLogo" className='w-96'/>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner