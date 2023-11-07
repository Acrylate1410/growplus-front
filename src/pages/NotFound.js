import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found h-[100vh] flex items-center justify-center flex-col">
    <header className='header p-4 bg-[#9ec7a5] flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
      <Link to="/">
        <div className='flex h-12 cursor-pointer'>
          <img alt="Grow Plus+" src="logo.png"></img>
        </div>
      </Link>
    </header>
    <img src="404.png" alt="404"></img>
    <h1 className=" font-bold text-4xl text-center mx-2 mb-8">Không tìm thấy trang bạn yêu cầu</h1>
    <Link to="/" className="link-home">
        <button className='mx-auto bg-[#3b8b59] text-white w-40 h-12 rounded-full flex items-center justify-center border border-[#3b8b59] hover:bg-white hover:text-[#3b8b59] transition '>
            Quay về trang chủ   
        </button>
    </Link>
  </div>
);

export default NotFound;