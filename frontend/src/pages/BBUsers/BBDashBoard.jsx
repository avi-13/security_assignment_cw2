import React from 'react';

const BBDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-semibold">Blood Bank Dashboard</h1>
      </header>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Your dashboard widgets/components */}
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-semibold mb-2">Total Donors</h2>
            <p className="text-gray-600">1000</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-semibold mb-2">Available Blood Groups</h2>
            <ul className="text-gray-600">
              <li>A+</li>
              <li>B+</li>
              <li>O-</li>
              {/* Add more blood groups */}
            </ul>
          </div>
          {/* Add more widgets/components */}
        </div>
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-sm text-gray-600">&copy; 2024 Blood Bank Inc.</p>
      </footer>
    </div>
  );
};

export default BBDashboard;
