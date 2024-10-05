import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const BookCards = ({headline, books}) => {

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>
        {headline}
      </h2>

    {/* cards */}
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {
  books.map(book => (
    <SwiperSlide key={book._id}>
      <Link to={`/book/${book._id}`} style={{ textDecoration: 'none' }}>
        <div style={{ marginBottom: '10px' }}>
          <img src={book.imgURL} alt="bookImg" />
          <div className=' absolute top-3 right-3 bg-green-700 hover:bg-black p-2'>
            <FaShoppingCart className='w-4 h-4 text-white' />
          </div>
        </div>
        <div>
          <h4 className='text-black font-bold' style={{ marginBottom: '5px' }}>{book.bookTitle}</h4>
          <p className='text-black' style={{ marginBottom: '5px' }}>{book.authorname}</p>
          <p className='text-black' style={{ fontSize: '0.8em' }}>Rs.{book.price}</p>
        </div>
      </Link>
    </SwiperSlide>
  ))
}

        </Swiper>
      </div>
    </div>
  )
}

export default BookCards


