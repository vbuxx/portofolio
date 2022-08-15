import { useState } from "react";
import Link from "next/link";
import Container from "../Container";

function Navbar() {
  return (
    <nav className="py-8">
      <Container>
        <div className="flex items-center">
          <div className="w-6/12">
            <Link href="/">
              <a className="flex items-center justify-center lg:justify-start bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-pink-400 font-extrabold text-2xl">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-indigo-700 via-purple-500 to-pink-500 rounded mr-4 font-extrabold text-2xl text-white">
                  E
                </div>
              </a>
            </Link>
          </div>
          <div className="w-6/12">
            <ul className="lg:space-x-14 flex lg:justify-end lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li>
                <Link href="/">
                  <a className="font-bold hover:drop-shadow-xl">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="font-bold hover:drop-shadow-xl">About</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="font-bold hover:drop-shadow-xl">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="font-bold hover:drop-shadow-2xl">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
