import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className='bg-black md:flex justify-around text-white py-6 text-center md:text-start w-full'>

              <div className='mx-2'>
                <img alt="" src="logo.png"></img>
                <p className="text-xl my-4">Liên hệ với chúng tôi</p>
                <div className="flex items-center">
                    <IoLocationOutline className="text-2xl"/>
                    <p className='my-2 md:my-0 ml-1'>Công ty nhập khẩu và phân phối: Công ty Phúc Khang</p>
                </div>
                <div className="flex items-center my-2">
                    <BiPhone className="text-2xl"/>
                    <p className='my-2 md:my-0 ml-1'>Hotline: 093 903 1155</p>
                </div>
                <div className="flex items-center">
                    <PiFacebookLogoBold className="text-2xl"/>
                    <p className='my-2 md:my-0 ml-1'>Facebook: <Link className="underline underline-offset-4 italic" to="https://facebook.com/profile.php?id=61550257613279">facebook.com/profile.php?id=61550257613279</Link></p>
                </div>
              </div> 
          </footer>
    )
}