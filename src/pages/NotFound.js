import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export function NotFound() {
  return (
    <div className="not-found">
      <header className='header p-4 bg-white flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
              <Link to="/">
                <div className='flex h-12 cursor-pointer'>
                  <img alt="" src="growplus.png" className='w-48 h-30 object-cover'></img>
                </div>
              </Link>
      </header>
      <img src="404.png" alt="404" className="h-64 mx-auto mt-12"></img>
      <h1 className=" font-bold text-4xl text-center mx-2 mt-4 mb-8 text-[#093489]">Không tìm thấy trang bạn yêu cầu</h1>
      <Link to="/" className="link-home">
          <button className='mx-auto bg-[#093489] text-white w-40 h-12 rounded-full flex items-center justify-center border border-[#093489] hover:bg-white hover:text-[#093489] transition '>
              Quay về trang chủ   
          </button>
      </Link>
      <div className="w-full"><Footer/></div>
    </div>
  )
};
