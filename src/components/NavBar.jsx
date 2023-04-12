import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-amber-400 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-xl">Art Van Furniture</div>
        <div className="flex items-center">
          <ul className="flex">
            <li className="ml-4"><a href="/" className="hover:text-gray-700">Home</a></li>
            <li className="ml-4"><a href="0" className="hover:text-gray-700">Products</a></li>
            <li className="ml-4"><a href="0" className="hover:text-gray-700">Clearance</a></li>
          </ul>
          <div className='flex ml-6'>
          <CartWidget />
          </div>
         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



