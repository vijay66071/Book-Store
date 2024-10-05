import React, { useEffect, useState } from 'react';
import BookCards from "../components/BookCards.jsx";

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data.slice(4, 16)));
    }, []);

    const lowerZIndexStyle = {
        zIndex: -1,
        position: 'relative' 
    };

    return (
        <div style={lowerZIndexStyle}>
            <BookCards books={books} headline="Other Books" />
        </div>
    );
};

export default OtherBooks;
