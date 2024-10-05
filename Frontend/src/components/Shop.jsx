import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import MyFooter from './MyFooter';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Shop() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      });
  }, []);

  useEffect(() => {
    setFilteredBooks(
      books.filter((book) =>
        book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, books]);

  return (
    <div className='bg-green-50 min-h-screen text-gray-800'>
      <div className='mt-28 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center text-green-800'>All Books are here</h2>
        <div className='my-8'>
          <input
            type='text'
            placeholder='Search by book name...'
            className='w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
          {filteredBooks.map((book) => (
            <Card key={book.id} className='flex flex-col border border-green-600'>
              <img src={book.imgURL} alt='bookImg' className='h-96 w-full object-cover' />
              <h5 className='text-2xl font-bold tracking-tight text-green-800 mt-4'>
                {book.bookTitle}
              </h5>
              <p className='font-normal text-gray-700'>
                {book.book_description}
              </p>
              <button className='bg-green-700 font-semibold text-white py-2 rounded-md mt-auto'>
                <Link to={`/book/${book._id}`} style={{ textDecoration: 'none' }}>
                  Buy Now
                </Link>
              </button>
            </Card>
          ))}
        </div>
      </div>
      <br /><br />
      <div>
        <MyFooter />
      </div>
    </div>
  );
}

export default Shop;
