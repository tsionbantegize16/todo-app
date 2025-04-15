import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;