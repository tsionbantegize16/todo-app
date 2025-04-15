import React from 'react';

function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;