import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
export default function Footer() {
    return (
        <footer className='bg-black md:flex justify-around text-white py-6 md:text-start w-full px-4'>
                    <div>
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
                    </div>
                    <div className="flex justify-center">
                        <div class="fb-page" 
                            data-href="https://www.facebook.com/profile.php?id=61550257613279"
                            data-width="380" 
                            data-hide-cover="false"
                            data-show-facepile="false"></div>
                    </div>
          </footer>
    )
}