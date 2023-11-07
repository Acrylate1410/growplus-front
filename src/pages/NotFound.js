import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const NotFound = () => (
  <div className="not-found">
    <header className='header p-4 bg-[#9ec7a5] flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
      <Link to="/">
        <div className='flex h-12 cursor-pointer'>
          <img alt="Grow Plus+" src="logo.png"></img>
        </div>
      </Link>
    </header>
    <img src="404.png" alt="404" className="h-64 mx-auto mt-12"></img>
    <h1 className=" font-bold text-4xl text-center mx-2 mt-4 mb-8 text-[#3b8b59]">Không tìm thấy trang bạn yêu cầu</h1>
    <Link to="/" className="link-home">
        <button className='mx-auto bg-[#3b8b59] text-white w-40 h-12 rounded-full flex items-center justify-center border border-[#3b8b59] hover:bg-white hover:text-[#3b8b59] transition '>
            Quay về trang chủ   
        </button>
    </Link>
    <div className="w-full fixed bottom-0"><Footer/></div>
  </div>
);

export default NotFound;