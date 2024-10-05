import React from 'react';
import backbook from '../assets/About/bookIcon01.png';
import MyFooter from '../components/MyFooter';

const BackBanner = () => {
    return (
        <>
            <div className='px-4 lg:px-24 bg-green-100 flex item-center'>
                <div className='flex flex-col w-full md:flex-row justify-between gap-12 py-40'>
                    {/* leftside and RightSide */}
                    <div className='md:w-1/2 space-y-7 h-full'>
                        <h2 className='text-5xl font-bold text-black'>
                           Know more <span className='text-green-700'>About Us</span>
                        </h2>
                        <p className='md:w-4/5 '>BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.</p>
                        
                    </div>


                    {/* right side */}
                    <div className='mr-24 '>
                        <img src={backbook} className='h-72 '/>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default BackBanner;
