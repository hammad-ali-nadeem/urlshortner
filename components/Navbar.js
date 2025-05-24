import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold "><Link href="/" className="flex flex-row items-center"><Image src="/favicon.png" alt="logo-nanolink" className="mr-2" width={32} height={49}/> Nano Link</Link></div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shorten" className="text-white hover:text-gray-300">
              Shorten Url
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;