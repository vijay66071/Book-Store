// Card Network	|   Card Number	         |    CVV	     |   Expiry Date
//--------------|------------------------|-------------|------------------
// Mastercard  	|   5267 3181 8797 5449  | 	Random CVV |	Any future date
// Visa	        |   4111 1111 1111 1111	 |  Random CVV |	Any future date

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRupeeSign, FaTruck, FaMoneyCheckAlt, FaTags } from 'react-icons/fa';

const SingleBook = () => {
  const [count, setCount] = useState(1);
  const [address, setAddress] = useState('');
  const [pincodeMessage, setPincodeMessage] = useState("");
  const [isPincodeValid, setIsPincodeValid] = useState(false);

  const { _id, bookTitle, imgURL, book_description, price } = useLoaderData();
  const shipping = (parseFloat((1 / count) * 50)).toFixed(2);
  const gst = (price * count * 0.05).toFixed(2);
  const finalPrice = (parseFloat(price * count) + parseFloat(gst) + parseFloat(shipping)).toFixed(2);

  const handlePayment = async () => {
    try {
      const orderResponse = await fetch('http://localhost:5000/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalPrice,
          currency: 'INR',
          receipt: `receipt_${_id}`,
        }),
      });
      const order = await orderResponse.json();
      console.log("Order received:", order); // Log the order to verify

      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY, // Your Razorpay Key Id
        amount: order.amount,
        currency: order.currency,
        name: "Book Store",
        description: "Test Transaction",
        image: FaTruck,
        order_id: order.id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id} \n Order ID: ${response.razorpay_order_id} \n Razorpay Signature: ${response.razorpay_signature}`);
          
        },
        prefill: {
          name: "Vijay Kumar",
          email: "kvijay66071@gmail.com",
          contact: "8890048202",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error in payment: ", error);
    }
  };

  return (
    <div className='mt-28 px-4 lg:px-24 flex flex-col lg:flex-row items-start bg-green-100'>
      <div className='flex flex-col items-center lg:items-start'>
        <img src={imgURL} alt={bookTitle} className='w-72' />
      </div>
      <div className='mt-10 lg:mt-0 lg:ml-20 flex flex-col lg:flex-row items-center lg:items-start'>
        <div className='w-full lg:w-96'>
          <p className='font-bold text-green-600 text-2xl mt-4'>Book Name:</p>
          <p className='font-serif text-2xl'>{bookTitle}</p><br />
          <p className='font-bold text-green-600 text-2xl'>Description:</p>
          <p className='font-serif text-justify'>{book_description}</p><br />

          <div className='flex items-center'>
            <button className='bg-red-600 text-white h-10 w-10 rounded-md' onClick={() => { if (count > 1) setCount(count - 1); }}>-</button>
            <span className='h-10 w-10 flex items-center justify-center mx-2'>{count}</span>
            <button className='bg-green-500 text-white h-10 w-10 rounded-md' onClick={() => { if (count < 20) setCount(count + 1); }}>+</button>
          </div>

          <p className='font-bold text-green-600 text-2xl mt-4'>Pin Code:</p>
          <input
            type="number"
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 100000 && value < 1000000) {
                setPincodeMessage("Cash on delivery available");
                setIsPincodeValid(true);
              } else {
                setPincodeMessage("");
                setIsPincodeValid(false);
              }
            }}
            className='w-full p-2 border border-gray-300 rounded-md mt-2'
          />
          <p className='text-green-500 text-sm'>{pincodeMessage}</p>

          <p className='font-bold text-green-600 text-2xl mt-4'>Address:</p>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter your address'
            className='w-full p-2 border border-gray-300 rounded-md mt-2'
          /><br /><br />

          <input
            type="button"
            value="Checkout"
            className={`bg-green-600 text-white h-10 w-full rounded-md cursor-pointer ${!isPincodeValid && 'opacity-50 cursor-not-allowed'}`}
            disabled={!isPincodeValid}
            onClick={handlePayment}
          />
        </div>
        <div className='w-full lg:w-64 lg:ml-20 mt-10 lg:mt-0'>
          <label className='text-black text-xl font-bold'>Order Details:</label>
          <div className='mt-4 p-4 border border-gray-300 rounded-md bg-gray-100 shadow-lg'>
            <ul className='list-none'>
              <li className='flex items-center text-lg'><FaTags className='mr-2' /><span className='font-bold'>Price:</span> Rs.{price} * {count}</li>
              <li className='flex items-center text-lg mt-2'><FaMoneyCheckAlt className='mr-2' /><span className='font-bold'>GST:</span> Rs.{gst}</li>
              <li className='flex items-center text-lg mt-2'><FaTruck className='mr-2' /><span className='font-bold'>Shipping:</span> Rs.{shipping}</li>
              <li className='flex items-center text-lg mt-4'><FaRupeeSign className='mr-2' /><span className='font-bold'>Total:</span> Rs.{finalPrice}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
