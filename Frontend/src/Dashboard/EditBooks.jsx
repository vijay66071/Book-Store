import React from 'react';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorname, imgURL, category, book_description, book_pdf_url, price } = useLoaderData();

  const bookCategories = [
    "select",
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Education",
    "Children Books",
    "Travel",
    "Art and Design",
    "Other"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleSelectedCategory = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorname = form.authorname.value;
    const imgURL = form.imgURL.value;
    const category = form.category.value;
    const book_description = form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;
    const price = form.price.value;

    const booksObj = {
      bookTitle,
      authorname,
      imgURL,
      category,
      book_description,
      book_pdf_url,
      price
    };

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(booksObj)
    })
      .then(res => res.json())
      .then(data => {
        alert("Book Updated Successfully!!");
      })
      .catch(error => {
        console.error('Error updating book:', error);
        alert("An error occurred while updating the book.");
      });
  };

  return (
    <div className='flex'>
      <div className='mb-8'>
        <div className='relative w-full max-w-xs mx-auto my-36'>
          <img
            src={imgURL}
            alt={bookTitle}
            className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-md'
          />
        </div>
        </div>
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Books Data</h2>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-8" onSubmit={handleUpdate}>
        {/* Book Title */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput className='w-full' id="bookTitle" type="text" placeholder="Book Name" required defaultValue={bookTitle} />
        </div>

        {/* Book Author */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="authorname" value="Book Author" />
          </div>
          <TextInput className='w-full' id="authorname" type="text" placeholder="Book Author" required defaultValue={authorname} />
        </div>

        {/* Book Image */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="imgURL" value="Book-Image URL" />
          </div>
          <TextInput className='w-full' id="imgURL" type="text" placeholder="Book URL" required defaultValue={imgURL} />
        </div>

        {/* Book Category */}
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='inputState' value='Book Category' />
          </div>
          <Select id='inputState' name='category' className='w-full' value={selectedBookCategory} onChange={handleSelectedCategory}>
            {bookCategories.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </div>

        {/* Book Description */}
        <div className='col-span-1 lg:col-span-2'>
          <div className="mb-2 block">
            <Label htmlFor="book_description" value="Book Description" />
          </div>
          <Textarea className='w-full' id="book_description" type="text" defaultValue={book_description} placeholder="Book Description here..." required rows={7} />
        </div>

        {/* Book PDF URL */}
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='book_pdf_url' value='Book PDF URL' />
          </div>
          <TextInput className='w-full' id='book_pdf_url' placeholder='Book URL' required type='text' defaultValue={book_pdf_url} />
        </div>

        {/* Book Price */}
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='price' value='Book Price' />
          </div>
          <TextInput className='w-full' id='price' placeholder='Book Price' required type='text' defaultValue={price} />
        </div>

        <div className='col-span-1 lg:col-span-2 flex justify-end'>
          <Button type="submit" className='mt-5'>Update Book</Button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default EditBooks;
