import React from 'react';

function NavigationBar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-xl font-semibold text-indigo-600">My Awesome To-Do</div>
        {/* You can add more navigation links here if needed */}
      </div>
    </nav>
  );
}

export default NavigationBar;