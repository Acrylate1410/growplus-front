import { BiPhone } from "react-icons/bi";
export default function Footer() {
    return (
        <footer className='bg-white md:flex justify-around text-[#093489] py-6 md:text-start w-full px-4'>
                    <div>
                        <div className='flex h-12 cursor-pointer'>
                            <img alt="" src="growplus.png" className='w-56 h-30 object-cover'></img>
                        </div>
                        <p className="text-xl my-4">Liên hệ với chúng tôi</p>
                        <div className="flex items-center my-2">
                            <BiPhone className="text-2xl"/>
                            <p className='my-2 md:my-0 ml-1'>Hotline tư vấn: 093 903 1155</p>
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