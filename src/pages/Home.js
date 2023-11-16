import {IoMdNutrition} from 'react-icons/io'
import {IoAccessibilitySharp} from 'react-icons/io5'
import {GiBodyHeight, GiNightSleep, GiBrain} from 'react-icons/gi'
import {FaBacteria} from 'react-icons/fa'
import {BsFillLungsFill} from 'react-icons/bs'
import {FaShieldHalved} from 'react-icons/fa6'
import { useEffect, useRef, useState} from 'react';
import { PiShoppingCart } from "react-icons/pi";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuBox } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
//import { BsStars } from "react-icons/bs";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { FaCaretDown,  FaArrowCircleUp } from "react-icons/fa";
import Footer from './Footer'
export function Home() {
  //<section className='w-full scroll-m-20' ref={sec2}><Wid /></section>
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
      fetch("https://growplus-api.onrender.com/articles/get_latest_articles").then(res => res.json()).then(data => {
        setArticleList(data || [])
      })
    }, []);
    const sec1 = useRef(null)
    const sec2 = useRef(null)
    const sec3 = useRef(null)
    const sec4 = useRef(null)
    const sec5 = useRef(null)
    const sec6 = useRef(null)
    const sec7 = useRef(null)
    const scroll = (sec) => {
      let destination;
      if (sec === "Thành phần dinh dưỡng") {
          destination = sec1
      } else if (sec === "Công dụng") {
          destination = sec2
      } else if (sec === "Quy cách đóng gói") {
          destination = sec3
      } else if (sec === "Ưu điểm nổi bật") {
          destination = sec4
      } else if (sec === "Hướng dẫn sử dụng") {
          destination = sec5
      } else if (sec === "Tin tức") {
          destination = sec6
      } else {
          destination = sec7
      }
      destination.current.scrollIntoView();
    };
    const HamburgerComponent = () => {
      const [isOpen, setOpen] = useState(false)
      let status
      isOpen ? status = "" : status = "hidden"
      return (
        <>
          <div className="z-10 relative"><Hamburger toggled={isOpen} toggle={setOpen} size={25}/></div>
          <div className={'fixed top-0 bottom-0 left-[33%] right-0 bg-white ' + status}>
            <div className='mt-20'>
                {["Thành phần dinh dưỡng", "Ưu điểm nổi bật", "Hướng dẫn sử dụng", "Quy cách đóng gói",  "Tin tức"].map(i => 
                    <div key={i}>
                        <div className='cursor-pointer text-[20px] border-b border-black pl-6 py-3 text-[#093489] font-medium ' onClick={() => {scroll(i); setOpen(false)}}>{i}</div>
                    </div>
                )}
            </div>
          </div>
        </>
      )
    }
    //bg-gradient-to-r from-[#ABE0FF] to-[#82ACF6]
    return (
        <div className="App w-full overflow-hidden mx-0 relative">
          <div className='fixed right-[37px] bottom-4 text-4xl z-[100] text-[#093489]' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><FaArrowCircleUp /></div>
          <header className='header p-4 bg-white flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
              <div className='flex h-12 cursor-pointer'  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'}) }>
                <img alt="" src="growplus.png" className='w-48 h-30 object-cover'></img>
              </div>
              <nav className='hidden md:flex mx-4'>
                  {["Thành phần dinh dưỡng", "Ưu điểm nổi bật", "Hướng dẫn sử dụng", "Quy cách đóng gói", "Tin tức"].map(i => 
                    <div key={i} className='flex'>
                        <div className='text-center cursor-pointer text-base text-blue-900 font-medium hover:scale-105  transition' onClick={() => scroll(i)}>{i}</div>
                        <div className='mx-3'></div>
                    </div>
                  )}
              </nav>
              <button onClick={() => scroll("Mua ngay")} className='md:mr-8 hidden text-sm md:flex items-center justify-center md:bg-gradient-to-b from-60% to-[#0D4CC9] from-[#093489] md:text-white w-8 h-8 md:w-36 md:h-12 rounded-full border md:border-2 border-black md:border-yellow-400 hover:scale-110 transition '>
                    <div className='text-sm md:text-base hidden md:block'>Mua ngay</div>  
                    <div className='mx-1 hidden md:block'></div>    
                    <div className='text-xl'><PiShoppingCart /></div>
              </button>
              <div className="flex items-center md:hidden">
                <button onClick={() => scroll("Mua ngay")} className='md:mr-8 text-sm flex items-center justify-center md:bg-gradient-to-b from-60% to-[#0D4CC9] from-[#093489] md:text-white w-8 h-8 md:w-36 md:h-12 rounded-full border md:border-2 border-black md:border-yellow-400 hover:scale-110 transition '>
                      <div className='text-sm md:text-base hidden md:block'>Mua ngay</div>  
                      <div className='mx-1 hidden md:block'></div>    
                      <div className='text-xl'><PiShoppingCart /></div>
                </button>
                <HamburgerComponent/></div>
          </header>
          <div className="bg-[url(/public/banner.jpg)] bg-[length:158%_100%] md:bg-[length:100%_100%] h-[300px] md:h-[500px] mt-20"></div>
          <div className='w-full md:flex'>
            <div className='md:w-1/2 mt-8 md:ml-8 mx-4 flex'><img src="chart.png" className='object-contain'/></div>
            <div className='md:w-1/2 mt-8 md:ml-8 mx-4 flex'><img src="Untitled-2.png" className='object-contain'/></div>
          </div>
          <section className='w-full mt-6 mb-16 md:mb-24 md:mt-8 scroll-m-20' ref={sec1}><IngredientTab /></section>
          <section className='w-full  bg-[#093489] pt-4 md:pt-20 md:pb-4 scroll-m-20'  ref={sec4}><NotableBenefits /></section>
          <section className='w-full scroll-m-20'  ref={sec5}><Accordion /></section>
          <section className='w-full mt-20 scroll-m-20'  ref={sec3}>
              <h2 className='font-bold text-3xl md:text-4xl mx-auto text-center text-[#093489]'>Quy cách đóng gói</h2>
              <div className='flex md:flex-row flex-col items-center md:justify-around py-4 px-2'>
                  <img alt="" src="gh.jpg" className='md:w-2/5 mt-0 md:mt-8 md:shadow-[0_60px_60px_-15px_rgba(0,0,0,0.3)] rounded-[45px] md:mr-12'></img>
                  <div className='w-full md:w-1/3 mt-8 md:mt-0'>
                    <div className='flex justify-around'>
                        {["gói/hộp", "ml/gói"].map(i =>
                          <div className=' bg-sky-100 rounded-b-xl border-t-8 border-[#093489] text-white p-8 md:p-12 text-center w-[40%] md:mr-4 md:w-auto' key={i}>
                            <div className='rounded-full h-20 w-20 text-3xl font-bold mx-auto border-4 border-[#093489] text-[#093489] flex items-center justify-center'>30</div>
                            <p className='mt-3 text-lg text-[#093489] font-semibold'>{i}</p>
                          </div>
                        )}
                    </div>
                  </div>
              </div>
          </section>
          <section className='w-full scroll-m-20' ref={sec6}>
              <h2 className='font-bold text-3xl md:text-4xl text-center mb-8 text-[#093489] mt-8'>Tin tức</h2>
              <Swiper 
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    }, 
                    768: {
                      slidesPerView: 3,
                    },
                  }} spaceBetween={30} navigation={true} modules={[Navigation]} className='!mx-8'>
                {articleList.map(i =>
                  <SwiperSlide>
                    <Link to={"/article?id=" + i._id}>
                      <img className='h-52 w-full object-cover' alt={i.title} src={i.thumbnail}></img>
                      <p className='font-bold text-xl mt-4'>{i.title}</p>
                      <p className='mt-4'>{i.description}</p>
                    </Link>
                  </SwiperSlide>
                )}
              </Swiper>
              <Link to="/news" className='block w-fit mx-auto'>
                <button className='md:mt-8 bg-[#093489] text-white w-36 h-12 rounded-full flex items-center justify-center border border-[#093489] hover:bg-white hover:text-[#093489] hover:scale-105 transition '>
                        Xem thêm tin tức   
                </button>
              </Link>
          </section>
          <section className='bg-[url(/public/adfh.jpg)] bg-cover bg-center relative h-[450px] mt-10 scroll-m-20'  ref={sec7}><Form/></section>
          <section className='flex justify-center items-center '>
            <div className='flex flex-col items-center py-4 text-blue-900 w-2/5 md:w-1/5 text-center'>
              <BsBoxSeam className='text-5xl'/>
              <p>Hàng chính hãng 100%</p>
            </div>
            <div className='mx-4'></div>
            <div className='flex flex-col items-center py-4 text-blue-900 w-2/5 md:w-1/5 text-center'>
              <FaShippingFast className='text-5xl'/>
              <p>Miễn phí giao hàng toàn quốc</p>
            </div>
          </section>
          <Footer/>
      </div>
    )
  };

  function Form() {
    const [toggle, setToggle] = useState("hidden")
    const name = useRef(null)
    const phone = useRef(null)
    const address = useRef(null)
    const subdivision = useRef(null)
    const district = useRef(null)
    const city = useRef(null)
    const quantity = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://growplus-api.onrender.com/orders/save_order", {
            method: "POST",
            body: JSON.stringify({
              name: name.current.value,
              phone: phone.current.value,
              address: address.current.value,
              subdivision: subdivision.current.value,
              district: district.current.value,
              city: city.current.value,
              quantity: quantity.current.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
        }).then(() => {
              name.current.value = ''
              phone.current.value = ''
              address.current.value = ''
              subdivision.current.value = ''
              district.current.value = ''
              city.current.value = ''
              quantity.current.value = 1
              alert("Đặt hàng thành công")
            }
          )
    }
    return (
      <>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#093489] opacity-60 z-0'></div>
            <div className='relative z-10 backdrop-blur-[0.5px] h-full  flex flex-col justify-center'>
              <h2 className='text-center font-bold text-3xl md:text-4xl  mb-4 z-10 text-white'>Thông tin giao hàng</h2>
              <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input ref={name} required className='outline-0 text-[#093489] md:w-1/2 w-4/5 pl-5 py-2 my-2 rounded-lg' placeholder='Họ và tên khách hàng'></input>
                <div className='relative md:w-1/2 w-4/5 '>
                  <div className='outline-0 text-zinc-500 pl-5 py-2  my-2 rounded-lg w-full bg-white h-10 cursor-pointer' onMouseDown={() => {toggle === "hidden" ? setToggle("") : setToggle("hidden")}}>Số điện thoại & Địa chỉ nhận hàng</div>
                  <div className='absolute top-4 right-4 text-2xl'  onMouseDown={() => {toggle === "hidden" ? setToggle("") : setToggle("hidden")}} ><FaCaretDown /></div>
                </div>
                <div className={'md:w-1/2 w-4/5 '  + toggle}>
                <input ref={phone} required className='outline-0 text-[#093489] w-full pl-5 py-2 my-2 rounded-lg' placeholder='Số điện thoại'></input>
                  <input ref={phone} required className={'outline-0 text-[#093489] w-full pl-5 py-2 my-2 rounded-lg '} placeholder='Đường, phường, quận, tỉnh/thành phố'></input>
                </div>
                <div className='mx-auto md:w-1/2 w-4/5 flex justify-end items-center mt-4'>
                  <p className='text-white'>Số lượng: </p>
                  <input ref={quantity} defaultValue="1" min="1" type="number" className='md:block outline-0 text-[#093489] w-12 mx-4 pl-1 py-0.5 rounded-lg'></input>
                  <button type="submit" className='bg-[#093489] text-white w-36 h-12 rounded-full flex items-center justify-center border border-[#093489] hover:bg-white hover:text-[#093489] transition '>
                      Đặt hàng        
                  </button>
                </div>
              </form>
            </div>
      </>
    )
  }
  
  function IngredientTab() {
    //{id: 22,  ingredient: "Dextrin", amount: "1.45"},
    const ingredients =[{id: 1, ingredient: "Oligosaccharide", amount: "6300"},
                        {id: 2, ingredient: "Mật ong tinh khiết", amount: "4500"},
                        {id: 3,  ingredient: "Collagen peptide", amount: "100"},
                        {id: 4,  ingredient: "Dầu cá tinh luyện (chứa DHA/EPA)", amount: "87,0058"},
                        {id: 5,  ingredient: "Magie Sulfat (Magie 16mg)", amount: "80"},
                        {id: 6,  ingredient: "L-ornithine hydrochloride", amount: "50"},
                        {id: 7, ingredient: "Protein", amount: "50"},
                        {id: 8, ingredient: "Keo ong", amount: "50"},
                        {id: 9,  ingredient: "Peptide lòng đỏ trứng", amount: "30"},
                        {id: 10,  ingredient: "Canxi lactate", amount: "30"},
                        {id: 11, ingredient: "Phosphatidylserine (5:1)", amount: "20"},
                        {id: 12,  ingredient: "Men chứa kẽm (10%)", amount: "20"},
                        {id: 13, ingredient: "Vitamin A (10%)", amount: "12"},
                        {id: 14, ingredient: "Vitamin C", amount: "10"},
                        {id: 15, ingredient: "Vi khuẩn axit lactic", amount: "4,5"},
                        {id: 16, ingredient: "Vitamin E", amount: "2"},
                        {id: 17, ingredient: "Vitamin B1", amount: "2"},
                        {id: 18, ingredient: "Vitamin B2", amount: "2"},
                        {id: 19, ingredient: "Vitamin B6", amount: "2"},
                        {id: 20, ingredient: "Vitamin B12 (0,1%)", amount: "2"},
                        {id: 21,  ingredient: "Vitamin D3 (0,25%)", amount: "2"},
                        {id: 22,  ingredient: "Axit folic", amount: "0,2"},
                        {id: 23, ingredient: "Vi khuẩn Bifidobacteria", amount: "0,05"},
                       ]
    return (
      <>

        <div id="ingredients" className='md:w-3/5 md:ml-32 mx-2  '>
          <h2 className='text-center font-bold text-3xl md:text-4xl  mb-5 z-10 text-[#093489] relative'>Thành phần dinh dưỡng</h2>
          <div className='absolute right-4 overflow-hidden w-96 z-0 mt-20 hidden md:block' ><img src="3growplus.png"></img></div>
          <div className='flex justify-between font-bold px-4 py-5 text-white rounded-t-xl bg-gradient-to-r from-10% to-[#0D4CC9] from-[#093489] items-center '>
              <p>Thành phần  (trong 1 gói 30ml)</p>
              <p className='text-end'>Hàm lượng (mg/gói)</p>
          </div>
          <div className='h-[500px] overflow-y-scroll'>
              {ingredients.map(i =>
                <div key={i.id} className={i.id % 2 !== 0 ? 'flex justify-between py-4 px-4' :  'flex justify-between py-4 px-4 bg-sky-100'}>
                    <p className='font-semibold'>{i.id + ". " + i.ingredient}</p>
                    <p className='font-semibold'>{i.amount}</p>
                </div>
              )}
          </div>
        </div>
      </>
    )
  }

  
  function NotableBenefits() {

    const texts = [ {id: "Bảng thành phần vàng", text: "Sản phẩm hàng đầu của Nhật Bản về SỰ PHÁT TRIỂN TOÀN DIỆN đặc biệt là SỰ PHÁT TRIỂN CHIỀU CAO của trẻ với tổng hợp 23 thành phần chọn lọc."},
                    {id: "Tăng chiều cao tối đa", text: "Các chuyên gia Nhật Bản đã xây dựng một công thức hoàn hảo không chỉ tập trung vào Canxi mà còn có các thành phần khác, giúp xương phát triển tối đa để tăng chiều cao cho trẻ và ưu việt hơn rất nhiều so với những sản phẩm tăng chiều cao thông thường chỉ tập trung vào Canxi."},
                    {id: "Hệ tiêu hóa khỏe mạnh", text: "Đây là một sản phẩm với công thức không chỉ giúp hấp thụ nhóm các chất dinh dưỡng để tăng chiều cao từ sản phẩm mà còn hấp thụ Canxi tự nhiên bằng cách đề cao nhóm 3 lợi khuẩn Axit lactic, Bifidobacteria và Oligosaccharide, giúp trẻ có 1 hệ tiêu hóa khỏe mạnh, giúp trẻ hấp thu và chuyển hóa các chất dinh dưỡng ở mức tối ưu nhất."},
                    {id: "Tăng cường hệ miễn dịch", text: "Thành phần có vitamin tổng hợp, keo ong… và các dưỡng chất cần thiết khác giúp trẻ có có hệ hô hấp và cơ thể khỏe mạnh, phòng ngừa sự tấn công của các loại vi khuẩn và vi rút, tăng cường sức đề kháng và khả năng miễn dịch."},
                    {id: "Hỗ trợ phát triển não bộ", text: "Sản phẩm không chỉ giúp trẻ phát triển về thể chất, chiều cao mà còn giúp trẻ tăng cường trí nhớ, phát triển trí thông minh nhờ có thành phần DHA, EPA và Phosphatidylserine giúp cải thiện chức năng não bộ, phát triển kích thích tế bào não."},
                    {id: "Mùi vị thơm ngon, tiện lợi sử dụng", text: "Mùi vị thơm ngon, độ ngọt vừa phải và không có đường có thể gây sâu răng cho trẻ; Bào chế dạng nước có khả năng hấp thu tốt nhất cho cơ thể so với các dạng bào chế khác; 1 gói 30ml tiện lợi để sử dụng và bảo quản."},
                    {id: "Đạt tiêu chuẩn GMP Nhật Bản", text: "Sản xuất tại nhà máy đạt chuẩn GMP có tiêu chuẩn chất lượng khắt khe về nguyên liệu, máy móc, công nghệ, quy trình sản xuất và chất lượng thành phẩm với đội ngũ chuyên gia hàng đầu nghiên cứu về nguồn dinh dưỡng & phát triển toàn diện của trẻ"}]
    return (
      <>
        <h2 className='font-bold text-3xl md:text-4xl mx-auto text-center md:mb-8 text-white'>Ưu điểm nổi bật</h2>
        <div className='hidden md:flex flex-wrap justify-between md:my-16 md:mx-12'>
          {texts.map(i =>
            <div className='w-[90%] md:w-[31.5%] my-8 md:my-4 mx-auto md:mx-0 bg-white pt-8 pb-12 rounded-3xl'>
                  <div className='text-xl mx-6 md:text-2xl font-bold text-[#093489] mb-8'>{i.id}</div>
                  <div className='flex-1 mx-6'>{i.text}</div>
            </div>
          )}
        </div>
        <Swiper spaceBetween={30} pagination={true} modules={[Pagination]} className='mb-8 !mx-8 md:!hidden'>
                {texts.map(i =>
                  <SwiperSlide><div className='w-[100%] md:w-[31.5%] mt-4 mb-8 md:my-4 mx-auto md:mx-0 bg-white pt-2 pb-12 rounded-3xl h-96'>
                    <div className='text-xl mx-6 md:text-2xl font-bold text-[#093489] md:mb-8 text-center'>{i.id}</div>
                      <div className='flex-1 mx-6 text-justify'>{i.text}</div>
                      <>
                        {i.id === "Bảng thành phần vàng" && 
                          <div className='overflow-hidden w-48 z-0 mx-auto' >
                            <img src="3growplus.png"></img>
                          </div>}
                      </>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
      </>
    )
  }
  function Wid() {
    const data1 = [{logo: <IoMdNutrition/>, text: "Bổ sung dinh dưỡng giúp trẻ phát triển toàn diện nhất"},
                    {logo: <GiBodyHeight/>, text: "Giúp phát triển độ dài xương, phát triển chiều cao cho trẻ"},
                    {logo: <GiBrain/>, text: "Giúp tăng cường phát triển trí não, tăng khả năng tập trung"},
                    {logo: <IoAccessibilitySharp/>, text: "Giúp tăng cường thể lực, sức khỏe cho trẻ"}]
    const data2 = [{logo: <FaShieldHalved/>, text: "Giúp trẻ tăng cường sức đề kháng, hệ miễn dịch của cơ thể"},
                    {logo: <FaBacteria/>, text: "Bổ sung lợi khuẩn tốt cho hệ tiêu hóa"},
                    {logo: <BsFillLungsFill/>, text: "Giúp bổ phổi, tăng cường hệ hô hấp của trẻ, giảm tình trạng viêm phổi, viêm đường hô hấp và bớt ốm vặt"},
                    {logo: <GiNightSleep/>, text: "Giúp trẻ ăn và ngủ ngon hơn"}]
    return (
      <div className='bg-[url(/public/ed936cd603a9d1f788b8.jpg)] bg-[length:200%_100%] md:bg-[length:100%_100%] flex flex-col justify-center relative z-0 md:h-[800px]'>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#093489] opacity-80 z-0'></div>
        <div className='relative z-10 backdrop-blur-[0.5px] h-full'>
          <h1 className='deco1 text-center font-bold text-5xl md:text-6xl z-10 mt-20 text-red-400'>GROW PLUS+</h1>
          <p className='deco2 text-2xl md:text-3xl text-center mt-4 md:mb-0 mb-20 text-blue-700 italic font-medium'>Giúp mẹ chăm trẻ nhàn rỗi và mang đến sức khỏe toàn diện cho trẻ</p>
          <div className='mx-4 md:mx-12'>
              <WidCol data={data1}/>
              <WidCol data={data2}/>
          </div>
        </div>
      </div>
    )
  }
  
  function WidCol(props) {
    return (
      <div className='text-center md:flex'>    
          {props.data.map(i => 
              <div className='my-12 md:h-44 md:w-1/4' key={i.text}>
                  <p className='border-4 text-white border-white rounded-full w-16 aspect-square flex justify-center items-center text-4xl mx-auto'>{i.logo}</p>
                  <p className='md:w-3/4 mx-auto mt-4 text-white'>{i.text}</p>
              </div>
          )}  
      </div>
    )
  }

  function Accordion() {
    const texts = ["Liều dùng: 1 gói 1 ngày", "Nên uống buổi sáng sau hoặc trước khi ăn 30 phút đến 1 tiếng", "Nên sử dụng theo liệu trình tối thiểu 3 đến 5 tháng để đạt hiệu quả tối đa", "Sản phẩm có thể sử dụng duy trì thường xuyên mà không gây tác dụng phụ"]
    return (
        <div className='md:w-4/5 mx-auto md:mt-8'>
          <h2 className='font-bold text-3xl md:text-4xl mx-auto text-center mb-5 text-[#093489]'>Hướng dẫn sử dụng</h2>
          <div className="text-start mb-20 rounded-3xl mx-2 md:flex justify-around">
              <div className='md:w-1/2 flex flex-col justify-between'>
                {texts.map(i => <div key={i} className='h-[85px] rounded-r-xl flex items-center border-l-8 border-[#093489] bg-sky-100 md:px-8 px-2 mb-2'>{i}</div>)}
              </div>
              <img alt="" className='w-4/5 mx-auto mt-8 md:w-1/3' src="f4ce03e778d1ad8ff4c0.png"></img>
          </div>
        </div>
    )
  }
