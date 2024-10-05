import React from 'react'
import backbook from '../assets/About/bookIcon01.png';

const BlogHeader = () => {
    return (
        <>
            <div className='px-4 lg:px-24 bg-green-100 flex item-center'>
                <div className='flex flex-col w-full md:flex-row justify-between gap-12 py-40'>
                    {/* leftside and RightSide */}
                    <div className='md:w-1/2 space-y-7 h-full'>
                        <h2 className='text-5xl font-bold text-black'>
                            Know more about<br /> <span className='text-green-700'>Our Blog</span>
                        </h2>
                        <p className='md:w-4/5 '>Explore the world of literature with our blog, where we delve into a wide range of topics related to books, reading, and the literary world. From book reviews and author interviews to literary analysis and reading recommendations, our blog is your go-to destination for all things bookish.</p>

                    </div>


                    {/* right side */}
                    <div className='mr-24 '>
                        <img src={backbook} className='h-72 ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogHeader