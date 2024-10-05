import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Card } from "flowbite-react";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const UserBlog = () => {
  // Predefined feedback data
  const predefinedFeedback = [
    {
      name: 'Daniel',
      avatar: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png',
      rating: 3,
      comment: 'At Bookstore, we take pride in our diverse collection of books, ranging from bestsellers to hidden gems across various genres. Whether you\'re searching for the latest releases, timeless classics, or niche titles, you\'ll find them all here. Our knowledgeable staff is always on hand to offer personalized recommendations and assist you in finding the perfect book.'
    },
    {
      name: 'Emily',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077012.png',
      rating: 4,
      comment: 'Great selection of books and excellent customer service! I always find what I\'m looking for and enjoy browsing through the various genres.'
    },
    {
      name: 'Michael',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077011.png',
      rating: 5,
      comment: 'I can\'t express how much I love this bookstore! The atmosphere is cozy, the staff is incredibly helpful, and the selection of books is unmatched. I find myself spending hours here every time I visit.'
    },
    {
      name: 'Sophia',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077013.png',
      rating: 4,
      comment: 'The bookstore has become my go-to place whenever I need a break from the hustle and bustle of life. It\'s like stepping into another world filled with endless possibilities.'
    },
    {
      name: 'Ethan',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077014.png',
      rating: 5,
      comment: 'Absolutely love the bookstore! It has everything I could ever want, and the staff is always friendly and knowledgeable. I always leave feeling inspired and rejuvenated.'
    },
    {
      name: 'Olivia',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077015.png',
      rating: 4,
      comment: 'Such a charming bookstore with an incredible atmosphere! I always find something new and interesting to read, and the staff recommendations are spot on.'
    },
    {
      name: 'Alexander',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077016.png',
      rating: 3,
      comment: 'Decent selection of books, but the pricing could be better. However, the staff is friendly and helpful, and the atmosphere is cozy.'
    },
    {
      name: 'Isabella',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077017.png',
      rating: 5,
      comment: 'I can\'t get enough of this bookstore! It feels like home every time I walk through the door. The staff is like family, and the selection of books is unmatched.'
    },
    {
      name: 'William',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077018.png',
      rating: 4,
      comment: 'A hidden gem in the city! I stumbled upon this bookstore by chance and was pleasantly surprised by the vast selection of books and the cozy atmosphere.'
    },
    {
      name: 'Charlotte',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077019.png',
      rating: 4,
      comment: 'I love spending my weekends at this bookstore! It\'s my happy place, filled with endless shelves of books waiting to be discovered.'
    },
    {
      name: 'Sophia',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077013.png',
      rating: 4,
      comment: 'The bookstore has become my go-to place whenever I need a break from the hustle and bustle of life. It\'s like stepping into another world filled with endless possibilities.'
    },
    {
      name: 'Ethan',
      avatar: 'https://cdn-icons-png.flaticon.com/128/1077/1077014.png',
      rating: 5,
      comment: 'Absolutely love the bookstore! It has everything I could ever want, and the staff is always friendly and knowledgeable. I always leave feeling inspired and rejuvenated.'
    }
  ];
  

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: 'calc(100vh - 100px)',
        padding: '20px 0' 
      }}>
        <div style={{
          width: '900px',
          height: '200px',
          marginTop: '-300px'
        }}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {predefinedFeedback.map((feedback, index) => (
              <SwiperSlide key={index} className='mb-10'>
                <div className="max-w-sm">
                  <div className="text-2xl font-bold tracking-tight flex flex-row text-gray-900 dark:text-white">
                    <img className='h-10 w-10 flex rounded-full' src={feedback.avatar} alt="avatar"/> &nbsp;
                    {feedback.name}
                  </div>
                  <div className="text-2xl tracking-tight flex flex-row text-gray-900 dark:text-white">
                    {/* Display star icons for rating */}
                    {[...Array(feedback.rating)].map((_, starIndex) => (
                      <span 
                        key={starIndex}
                        style={{ cursor: 'pointer' }}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="font-thin text-gray-700 dark:text-gray-400">
                    {feedback.comment}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <br/><br/>
    </div>
  );
}

export default UserBlog;
