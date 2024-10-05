import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="max-w-3xl w-full px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Bookstore Admin Dashboard</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-6">
            Welcome to the Bookstore Admin Dashboard. Manage your books, track sales, and engage with customers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sample cards for dashboard insights */}
            <div className="bg-green-200 border border-green-400 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Total Books</h3>
              <p className="text-gray-700">Available: 190</p>
            </div>
            <div className="bg-green-200 border border-green-400 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Monthly Sales</h3>
              <p className="text-gray-700">Rs. 10,000</p>
            </div>
            <div className="bg-green-200 border border-green-400 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Top Authors</h3>
              <p className="text-gray-700">J.K. Rowling, Stephen King, Agatha Christie</p>
            </div>
            <div className="bg-green-200 border border-green-400 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Customer Feedback</h3>
              <p className="text-gray-700">Average Rating: 4.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
