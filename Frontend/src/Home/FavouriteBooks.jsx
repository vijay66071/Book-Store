//bestseller
import React from 'react'
import { useState, useEffect } from 'react'
import BookCards from "../components/BookCards.jsx"
const FavouriteBooks = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 8)));
  },[])
  const lowerZIndexStyle = {
    zIndex: -1,
    position: 'relative'
  };
  return (
    <div style={lowerZIndexStyle}>
      <BookCards books={books} headline="Best Seller" />
    </div>
  )
}

export default FavouriteBooks