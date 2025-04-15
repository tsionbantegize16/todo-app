import React from 'react';

function Header() {
  const today = new Date();
  const day = today.getDate();

  return (
    <header className="bg-purple-400 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-semibold">TODO APP</h1>
      <div className="bg-white text-purple-400 rounded-md p-2">
        {day}
      </div>
    </header>
  );
}

export default Header;