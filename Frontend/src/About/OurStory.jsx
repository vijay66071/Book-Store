import React from 'react';
import { Card } from "flowbite-react";
import backbook from '../assets/About/bookIcon01.png';

const OurStory = () => {
    return (
        <>
            <div className='text-5xl font-bold text-center mb-6 text-green-700'>
                Success Stories
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-center'>
                    <Card href="#" className="max-w-xs md:max-w-sm w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Our Story
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                        </p>
                    </Card>

                    <Card href="#" className="max-w-xs md:max-w-sm w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            What We Offer
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            At Bookstore, we take pride in our diverse collection of books, ranging from bestsellers to hidden gems across various genres. Whether you're searching for the latest releases, timeless classics, or niche titles, you'll find them all here. Our knowledgeable staff is always on hand to offer personalized recommendations and assist you in finding the perfect book.
                        </p>
                    </Card>

                    <Card href="#" className="max-w-xs md:max-w-sm w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Community Engagement
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Beyond being a retail space, Bookstore is a community gathering place where book lovers can connect and engage with each other. We host author readings, book clubs, writing workshops, and other events that foster a vibrant literary culture. Additionally, we collaborate with local schools, libraries, and organizations to promote literacy and education in our community.
                        </p>
                    </Card>

                    <Card href="#" className="max-w-xs md:max-w-sm w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Our Mission
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            At Bookstore, our mission is to inspire, educate, and enrich the lives of our customers through the power of books. We believe that reading is not just a hobby but a way of life, and we are dedicated to spreading the joy of reading far and wide.
                        </p>
                    </Card>
                </div>

                <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-center'>
                    <Card href="#" className="max-w-xs md:max-w-sm w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Supporting Local Authors and Publishers
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            We are passionate about supporting local talent and fostering a thriving literary community. We take pride in showcasing the works of local authors and independent publishers, providing them with a platform to reach a wider audience. From hosting book signings and author talks to featuring local titles prominently in our store, we are dedicated to promoting the rich literary heritage of our region.
                        </p>
                    </Card>

                    <Card href="#" className="max-w-xs md:max-w-sm w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            The Power of Reading
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            At Bookstore, we believe in the transformative power of reading. Books have the ability to educate, inspire, and connect us to new ideas and perspectives. They can transport us to distant lands, challenge our beliefs, and ignite our imagination. Whether you're seeking escapism, knowledge, or personal growth, there's a book waiting to take you on a journey.
                        </p>
                    </Card>

                    <Card href="#" className="max-w-xs md:max-w-sm w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Sustainability
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            At Bookstore, we are committed to sustainability and environmental stewardship. We recognize the importance of minimizing our ecological footprint and strive to make environmentally conscious choices in every aspect of our operations. From utilizing recycled materials in our packaging to promoting digital reading options, we are constantly exploring innovative ways to reduce waste and conserve resources.
                        </p>
                    </Card>

                    <Card href="#" className="max-w-xs md:max-w-sm w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Visit Us
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            We invite you to visit Bookstore and immerse yourself in the world of literature. Whether you're a seasoned bookworm or just beginning your reading journey, we have something for everyone. Come discover new stories, meet fellow book enthusiasts, and experience the magic of Bookstore.
                        </p>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default OurStory;
