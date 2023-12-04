import { BiPhone } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className='bg-gradient-to-r from-10% to-[#0D4CC9] from-[#093489]  text-[#093489] py-6 md:text-start w-full px-4'>
                    <div>
                        <div className='flex h-12 cursor-pointer w-fit'>
                            <img alt="" src="growplus.png" className='w-40 md:w-56 h-30 object-cover'></img>
                        </div>
                        <div className="md:flex text-white justify-between mx-8">
                            <div>
                                <p>HỖ TRỢ KHÁCH HÀNG</p>
                                <p>• Chính sách đổi trả</p>
                                <p className="mb-2">• FAQ</p>
                                <Link to="/chinh-sach-tuyen-dai-ly">CHÍNH SÁCH TUYỂN ĐẠI LÝ</Link>
                            </div>
                           
                            <div className="flex items-center">
                                <button className="text-white px-4 py-0.5 md:p-4 flex items-center my-2  rounded-full border border-white hover:bg-white hover:text-[#093489] hover:scale-110 transition ">
                                    <BiPhone className="text-2xl"/>
                                    <Link to="tel:0939031155" className='my-2 md:my-0 ml-1 text-sm'>Hotline tư vấn: 093 903 1155</Link>
                                </button>
                                <div className="mx-2"></div>
                                <Link to="https://www.facebook.com/profile.php?id=61550257613279" className="text-white p-2 flex items-center my-2  rounded-full border border-white hover:scale-125 hover:bg-white hover:text-[#093489] transition ">
                                    <FaFacebookF className="text-3xl"/>
                                </Link>
                            </div>  
                        </div>
                    </div>
          </footer>
    )
}