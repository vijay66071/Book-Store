import React from 'react';
import { Card } from "flowbite-react";
// import backbook from '../assets/About/bookIcon01.png';
import teamImg01 from "../assets/About/person1.jpg";
import teamImg02 from "../assets/About/person2.jpg";
import teamImg03 from "../assets/About/person3.jpg";
import teamImg04 from "../assets/About/person4.jpg";

const OurTeam = () => {
    return (
        <>
            <div className='font-bold text-5xl text-center text-green-700 mb-6'>
                Our Team
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <Card href="#" className="max-w-xs md:max-w-sm w-full">
                    <img className='rounded-full h-36 w-36 object-cover mx-auto' src={teamImg02} alt="person1" />
                    <div className='text-center mt-4'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Rose
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                            BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                        </p>
                    </div>
                </Card>

                <Card href="#" className="max-w-xs md:max-w-sm w-full">
                    <img className='rounded-full h-36 w-36 object-cover mx-auto' src={teamImg03} alt="person1" />
                    <div className='text-center mt-4'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Robert Jane
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                            BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                        </p>
                    </div>
                </Card>

                <Card href="#" className="max-w-xs md:max-w-sm w-full">
                    <img className='rounded-full h-36 w-36 object-cover mx-auto' src={teamImg04} alt="person1" />
                    <div className='text-center mt-4'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Emily
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                            BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                        </p>
                    </div>
                </Card>

                <Card href="#" className="max-w-xs md:max-w-sm w-full">
                    <img className='rounded-full h-36 w-36 object-cover mx-auto' src={teamImg01} alt="person1" />
                    <div className='text-center mt-4'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Ameliya
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                            BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                        </p>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default OurTeam;
