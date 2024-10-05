import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import MyFooter from '../components/MyFooter';

const UploadBooks = () => {
  const bookCategories = [
    "select",
    "Friction",
    "Non-Fiction",
    "Mistery",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Bussiness",
    "Education",
    "Children Books",
    "Travel",
    "Art and Design",
    "Other"
  ]

  const [selectedBookCategories, setSelectedBookCategories] = useState(bookCategories[0]);

  const handleSelectedValues = (event) => {
    console.log(event.target.value);
    setSelectedBookCategories(event.target.value);

  }

  //handleBookSubmition
  const handlebookSubmition = (event) => {
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
    }

    console.log(booksObj);

    //send to db
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(booksObj)
    })
      .then(res => res.json())
      .then(data => {
        alert("Book Uploaded Successfully!!");
        form.reset();
      });


  }


  return (
    <>
      <div className='px-4 my-12 '>
        <h2 className='mb-8 text-3xl font-bold'> Upload Books</h2>

        <form className="flex lg:w:[1180px] flex-col flex-wrap gap-4" onSubmit={handlebookSubmition}>
          {/* 1st Row */}
          <div className='flex gap-8'>
            {/* book title */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book Title" />
              </div>
              <TextInput className='lg:w-96 md:w-64  sm:w-20' id="bookTitle" type="text" placeholder="Book Name" required />
            </div>

            {/* book author */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="authorname" value="Book Author" />
              </div>
              <TextInput className='lg:w-96 md:w-64  sm:w-20' id="authorname" type="text" placeholder="Book Author" required />
            </div>

          </div>


          {/* 2nd Row */}
          <div className='flex gap-8'>
            {/* book title */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imgURL" value="Book-Image URL" />
              </div>
              <TextInput className='lg:w-96 md:w-64  sm:w-20' id="imgURL" type="text" placeholder="Book URL" required />
            </div>

            {/* book Categories from array ( in hte top of this code) */}
            <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='inputState' value='Book Category' />
              </div>

              <Select id='inputState' name='category' className='w-full rounded' value={selectedBookCategories} onChange={handleSelectedValues}>
                {
                  bookCategories.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))
                }
              </Select>
            </div>
          </div>


          {/* 3rd row */}
          <div className='flex gap-8'>
            {/* book Description */}
            <div >
              <div className="mb-2 block">
                <Label htmlFor="book_description" value="Book Description" />
              </div>
              <Textarea className='lg:w-96 md:w-64  sm:w-20' id="book_description" type="text" placeholder="Book Description here..." required rows={7} />
            </div>

            {/* book pdf url */}
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='book_pdf_url' value='Book PDF URL' />
              </div>
              <div>
                <TextInput className='lg:w-96 md:w-64  sm:w-20' id='book_pdf_url' placeholder='Book URL' required type='text' />
              </div>
            </div>
          </div>


          {/* price */}
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='price' value='Book Price' />
            </div>
            <div>
              <TextInput className='lg:w-96 md:w-64  sm:w-20' id='price' placeholder='Book Price' required type='number' />
            </div>
          </div>
          <Button type="submit" className='mt-5'>Upload Book</Button>
        </form>
      </div>

    </>
  )
}

export default UploadBooks

