import React from "react";
import Link from "next/link";
import { SearchIcon, LoginIcon } from "@heroicons/react/outline";
import Logo from "./Logo";

const NavBar = () => {
  function searchButton() {
    return (
      <button className="flex flex-row items-center px-4 space-x-2 py-2 text-gray-400 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600">
        <SearchIcon className="w-6 h-6" />
        <span>Search (click "/" to search)</span>
      </button>
    );
  }
  function logInButton() {
    return (
      <button className="px-4 py-2 rounded-lg bg-purple-500 text-white flex flex-row space-x-2 hover:bg-purple-600 active:bg-purple-700">
        <LoginIcon className="w-6 h-6" />
        <p>Log In</p>
      </button>
    );
  }
  function getLogo() {
    return (
      <Link href="/">
        <a>
          <Logo className="h-10 w-auto" />
        </a>
      </Link>
    );
  }
  return (
    <nav className="w-full h-16 bg-white dark:bg-gray-800 sticky top-0 left-0 right-0 z-20">
      <div className="container h-full flex flow-row items-center justify-between">
        <div className="flex-1 flex flex-row items-center space-x-4">
          {getLogo()}
        </div>
        <div className="flex-1 flex items-center justify-end flex-row space-x-4">
          {searchButton()}
          {logInButton()}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
