import React from 'react'
import BannerCard from './BannerCard'
import discoverBooks from '../assets/BannerCard/discoverBooks.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-green-100 flex item-center'>
      <div className='flex flex-col w-full md:flex-row justify-between gap-12 py-40'>
        {/* leftside and RightSide */}
        <div className='md:w-1/2 space-y-7 h-full'>
          <h2 className='text-5xl font-bold text-black'>
            Buy and Sell Your Books <span className='text-green-700'>for best Prices</span>
          </h2>
          <p className='md:w-4/5 '>The bookstore offers a diverse collection of books catering to various interests and genres. From bestsellers to hidden gems, readers can explore a wide range of titles, both in print and digital formats. With knowledgeable staff and a welcoming atmosphere, the bookstore provides a haven for book enthusiasts to discover new stories, engage in literary discussions, and immerse themselves in the world of reading. Whether seeking the latest releases or timeless classics, visitors can expect an enriching experience that celebrates the love of literature.</p>
          <div className="flex items-center">
            <Link to="/shop" className="block"> 
              <img
                src={discoverBooks} 
                alt="Search Icon"
                className="w-3/4 h-10 rounded-xl" 
              />
            </Link>
          </div>

        </div>


        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  )
}

export default Banner