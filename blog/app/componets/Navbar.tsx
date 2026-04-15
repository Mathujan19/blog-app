import React from 'react';
import Link from 'next/link'; // <--- Make sure this import is here
import { BiSolidUserRectangle, BiSearch, BiPlus } from "react-icons/bi";
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-left">
        {/* Use Capital 'L' Link here */}
        <Link href="/profile">
          <BiSolidUserRectangle className="icon" />
        </Link>
         <Link href="/search">
          <BiSearch className="icon" />
        </Link>
         <Link href="/create">
          <BiPlus   className="icon" />
        </Link>
         </div>
        <div className="nav-middle"></div>
            <div className="nav-right"></div>
</nav>
  )
}

export default Navbar
