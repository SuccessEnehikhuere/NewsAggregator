import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-neutral-content text-black py-2 z-[1] ">
      <div className="align-item flex justify-center sm:justify-end ">
        {/* USER
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs  bg-[#4f46e5] hover:bg-[#a5b4fc] text-white border-none"
              onClick={handleUserLogout}
            >
              logout
            </button>
          </div>
        ) : ( */}
          <div className="flex gap-x-6 justify-center items-center ">
            <Link
              to="/login"
              className="link link-hover text-xs sm:text-sm capitalize"
            >
              sign in/ guest
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm capitalize"
            >
              create account
            </Link>
          </div>
        {/* )} */}
      </div>
    </header>
  )
}

export default Header