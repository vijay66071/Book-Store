import React from 'react';
import FavBookImg from '../assets/BannerCard/collections.jpg';
import {Link} from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-2 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2 flex justify-center'>
        <img src={FavBookImg} alt="img" className='h-120 w-auto rounded md:w-10/12' />
      </div>

      <div className='md:w-1/2 space-x-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favourite book <span className='text-green-700'>Book Here!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nobis dicta animi atque laudantium nisi repellendus perspiciatis id beatae iure!</p>
        {/* states */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listing</p>
          </div>

          <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Registered User</p>
          </div>

          <div>
            <h3 className='text-3xl font-bold'>300+</h3>
            <p className='text-base'>PDF Downloaded</p>
          </div>
        </div>


        <Link to="/shop" className = "mt-8 block" ><button className='bg-green-700 p-4 text-white font-semibold rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>
  );
}

export default FavBook;


