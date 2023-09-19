
import {IoMdNutrition} from 'react-icons/io'
import {IoAccessibilitySharp} from 'react-icons/io5'
import {GiBodyHeight, GiNightSleep, GiBrain} from 'react-icons/gi'
import {FaBacteria, FaThemeco} from 'react-icons/fa'
import {BsFillLungsFill, BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaShieldHalved} from 'react-icons/fa6'
import {AiOutlineMail, AiOutlineSearch} from 'react-icons/ai'
import { useRef, useState, useEffect } from 'react';
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";
export function Home() {
    const sec1 = useRef(null)
    const sec2 = useRef(null)
    const sec3 = useRef(null)
    const sec4 = useRef(null)
    const sec5 = useRef(null)
    const sec6 = useRef(null)
    const scroll = (sec) => {
      let destination;
      if (sec === "Thành phần dinh dưỡng") {
          destination = sec1
      } else if (sec === "Công dụng") {
          destination = sec2
      } else if (sec === "Quy cách đóng gói") {
          destination = sec3
      } else if (sec === "Lợi ích của Grow Plus+") {
        destination = sec4
      } else if (sec === "Cách sử dụng") {
        destination = sec5
      } else {
        destination = sec6
      }
      destination.current.scrollIntoView({behavior: 'smooth'});
    };
    const HamburgerComponent = () => {
      const [isOpen, setOpen] = useState(false)
      let status
      isOpen ? status = "" : status = "hidden"
      return (
        <>
          <div className="z-10 relative"><Hamburger toggled={isOpen} toggle={setOpen} size={20}/></div>
          <div className={'fixed top-0 bottom-0 left-[33%] right-0 bg-[#9ec7a5] flex justify-center items-center text-center ' + status}>
            <div>
                {["Thành phần dinh dưỡng", "Công dụng", "Quy cách đóng gói", "Lợi ích của Grow Plus+", "Cách sử dụng"].map(i => 
                    <div key={i}>
                        <div className='cursor-pointer' onClick={() => scroll(i)}>{i}</div>
                        <div className='my-6'></div>
                    </div>
                )}
                <button onClick={() => scroll("Mua ngay")} className='mx-auto bg-[#3b8b59] text-white w-36 h-12 rounded-full flex items-center justify-center border border-[#3b8b59] hover:bg-[#9ec7a5] hover:text-[#3b8b59] transition '>
                    Mua ngay      
                </button>
            </div>
          </div>
        </>
      )
    }
    return (
        <div className="App w-full overflow-hidden mx-0 relative">
          <header className='header p-4 bg-[#9ec7a5] flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
              <Link to="/">
                <div className='flex h-12 cursor-pointer'>
                  <img alt="" src="logo.png"></img>
                </div>
              </Link>
              <nav className='hidden md:flex mx-4'>
                  {["Thành phần dinh dưỡng", "Công dụng", "Quy cách đóng gói", "Lợi ích của Grow Plus+", "Cách sử dụng"].map(i => 
                    <div key={i} className='flex'>
                        <div className='text-center cursor-pointer text-sm' onClick={() => scroll(i)}>{i}</div>
                        <div className='mx-2 md:mx-4'></div>
                    </div>
                  )}
              </nav>
              <button onClick={() => scroll("Mua ngay")} className=' text-sm hidden md:block bg-[#3b8b59] text-white w-36 h-12 rounded-full flex items-center justify-center border border-[#3b8b59] hover:bg-[#9ec7a5] hover:text-[#3b8b59] transition '>
                    Mua ngay      
              </button>
              <div  className="block md:hidden"><HamburgerComponent/></div>
          </header>
          <div className="bg-[url(/public/banner.jpg)] bg-[length:158%_100%] md:bg-[length:100%_100%] h-[300px] md:h-[550px] mt-20"></div>
          <section className='w-full my-16 md:my-24 scroll-m-20' ref={sec1}><IngredientTab /></section>
          <section className='w-full scroll-m-20' ref={sec2}><Wid /></section>
          <section className='w-full my-20 scroll-m-20'  ref={sec3}>
              <h2 className='font-bold text-3xl md:text-4xl mx-auto text-center mb-8 text-[#3b8b59]'>Quy cách đóng gói</h2>
              <div className='flex md:flex-row flex-col items-center md:justify-around py-4 px-2 md:px-20'>
                  <img alt="" src="gh.jpg" className='md:w-2/5 order-2 md:order-1 mt-8 md:mt-0 shadow-[0_60px_60px_-15px_rgba(0,0,0,0.3)] rounded-[45px] '></img>
                  <div className='w-full md:w-1/3 md:order-2 order-1 '>
                    <div className='flex justify-around'>
                        {["gói/hộp", "gram/gói"].map(i =>
                          <div className=' bg-[#dddddd] rounded-b-xl border-t-8 border-[#3b8b59] text-white p-8 md:p-12 text-center w-[45%] md:w-auto' key={i}>
                            <div className='rounded-full h-20 w-20 text-3xl font-bold mx-auto border-4 border-[#3b8b59] text-[#3b8b59] flex items-center justify-center'>30</div>
                            <p className='mt-3 text-lg text-[#3b8b59] font-semibold'>{i}</p>
                          </div>
                        )}
                    </div>
                  </div>
              </div>
          </section>
          <section className='w-full  bg-gradient-to-r from-[#3b8b59] from-40% to-green-500 pt-20 pb-4 scroll-m-20'  ref={sec4}><NotableBenefits /></section>
          <section className='w-full scroll-m-20'  ref={sec5}><Accordion /></section>
          <section className='bg-[url(/public/adfh.jpg)] bg-cover bg-center relative h-[550px] mt-20 scroll-m-20'  ref={sec6}><Form/></section>
          <footer className='bg-black md:flex justify-around text-white py-6 text-center md:text-start w-full'>
              <div className='mx-2'>
                  <p className='my-2 md:my-0'>Nhà phân phối: Công ty TNHH Đầu tư thương mại và Du lịch Phúc Khang</p>
                  <p className='my-2 md:my-0'>Địa chỉ: 55 Ngõ 144 An Dương Vương, Phú Thượng, Tây Hồ, Hà Nội</p>
                  <p className='my-2 md:my-0'>Hotline: 093 903 1155</p>
              </div>
          </footer>
      </div>
    )
  };
  /*
                <div className='my-6 md:my-0 md:mx-6'>
                  <p>KẾT NỐI CHÚNG TÔI QUA</p>
                  <div className='flex justify-center mt-2'>
                      <BsFacebook className='cursor-pointer ' />
                      <div className='mx-2'></div>
                      <BsInstagram className='cursor-pointer ' />
                      <div className='mx-2'></div>
                      <BsTwitter className='cursor-pointer ' />
                      <div className='mx-2'></div>
                      <AiOutlineMail className='cursor-pointer ' />
                  </div>
              </div>
              */
  function Form() {
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
        })
    }
    return (
      <>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#3b8b59] opacity-60 z-0'></div>
            <div className='relative z-10 backdrop-blur-[0.5px] h-full  flex flex-col justify-center'>
              <h2 className='text-center font-bold text-3xl md:text-4xl  mb-12 z-10 text-white'>Thông tin khách hàng</h2>
              <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input ref={name} required className='outline-0 text-[#3b8b59] md:w-1/2 w-4/5 p-2 my-2 rounded-lg' placeholder='Họ và tên khách hàng'></input>
                <input ref={phone} required className='outline-0 text-[#3b8b59] md:w-1/2 w-4/5 p-2 my-2 rounded-lg' placeholder='Số điện thoại'></input>
                <input ref={address} required className='outline-0 text-[#3b8b59] md:w-1/2 w-4/5 p-2 my-2 rounded-lg' placeholder='Địa chỉ nhận hàng'></input>
                <div className='flex flex-col md:flex-row justify-between md:w-1/2 w-4/5 my-0 md:my-2 mx-auto'>
                    <input ref={subdivision} required className='outline-0 text-[#3b8b59] md:w-[31.5%] my-2 md:my-0 p-2 rounded-lg' placeholder='Phường'></input>
                    <input ref={district} required className='outline-0 text-[#3b8b59] md:w-[31.5%] my-2 md:my-0 p-2 rounded-lg' placeholder='Quận'></input>
                    <input ref={city} required className='outline-0 text-[#3b8b59] md:w-[31.5%] my-2 md:my-0 p-2 rounded-lg' placeholder='Thành phố'></input>
                </div>
                <div className='mx-auto md:w-1/2 w-4/5 flex justify-end items-center mt-4'>
                  <p className='text-white'>Số hộp: </p>
                  <input ref={quantity} defaultValue="1" min="1" type="number" className='outline-0 text-[#3b8b59] w-12 mx-4 pl-1 py-0.5 rounded-lg'></input>
                  <button type="submit" className='bg-[#3b8b59] text-white w-36 h-12 rounded-full flex items-center justify-center border border-[#3b8b59] hover:bg-white hover:text-[#3b8b59] transition '>
                      Đặt hàng        
                  </button>
                </div>
              </form>
            </div>
      </>
    )
  }
  
  function IngredientTab() {
    const ingredients =[{id: 1,  ingredient: "Canxi lactate", amount: "30"},
                        {id: 2,  ingredient: "Vitamin D3 (0,25%)", amount: "2"},
                        {id: 3,  ingredient: "Peptide lòng đỏ trứng", amount: "30"},
                        {id: 4,  ingredient: "Men chứa kẽm (10%)", amount: "20"},
                        {id: 5,  ingredient: "Magiê sulfat", amount: "80"},
                        {id: 6,  ingredient: "Axit folic", amount: "0,2"},
                        {id: 7,  ingredient: "Collagen peptide", amount: "100"},
                        {id: 8,  ingredient: "Dầu cá tinh luyện (DHA/EPA)", amount: "87,0058"},
                        {id: 9,  ingredient: "L-ornithine hydrochloride", amount: "50"},
                        {id: 10, ingredient: "Protein", amount: "50"},
                        {id: 11, ingredient: "Mật ong tinh khiết", amount: "4500"},
                        {id: 12, ingredient: "Keo ong", amount: "50"},
                        {id: 13, ingredient: "Chiết xuất Phosphatidylserine (10:1)", amount: "20"},
                        {id: 14, ingredient: "Vi khuẩn axit lactic", amount: "4,5"},
                        {id: 15, ingredient: "Vi khuẩn Bifidobacteria", amount: "0,05"},
                        {id: 16, ingredient: "Oligosaccharide", amount: "6300"},
                        {id: 17, ingredient: "Vitamin A (10%)", amount: "12"},
                        {id: 18, ingredient: "Vitamin C", amount: "10"},
                        {id: 19, ingredient: "Vitamin E", amount: "2"},
                        {id: 20, ingredient: "Vitamin B1", amount: "2"},
                        {id: 21, ingredient: "Vitamin B2", amount: "2"},
                        {id: 22, ingredient: "Vitamin B6", amount: "2"},
                        {id: 23, ingredient: "Vitamin B12 (0,1%)", amount: "2"},
                      ]
    return (
      <>
        <h2 className='text-center font-bold text-3xl md:text-4xl  mb-12 z-10 text-[#3b8b59]'>Thành phần dinh dưỡng</h2>
        <div id="ingredients" className='md:w-3/5 md:mx-auto mx-2'>
          <div className='flex justify-between font-bold px-4 py-5 text-white rounded-t-xl bg-[#3b8b59] items-center'>
              <p>Thành phần </p>
              <p className='text-end'>Hàm lượng (mg/gói)</p>
          </div>
          <div className='h-[500px] overflow-y-scroll'>
              {ingredients.map(i =>
                <div key={i.id} className={i.id % 2 !== 0 ? 'flex justify-between py-4 px-4' :  'flex justify-between py-4 px-4 bg-[#dddddd]'}>
                    <p>{i.ingredient}</p>
                    <p>{i.amount}</p>
                </div>
              )}
          </div>
        </div>
      </>
    )
  }

  
  function NotableBenefits() {
    const texts = [ {id: "01", text: "Sản phẩm hàng đầu của Nhật Bản về SỰ PHÁT TRIỂN TOÀN DIỆN đặc biệt là SỰ PHÁT TRIỂN CHIỀU CAO của trẻ với tổng hợp 22 thành phần chọn lọc."},
                    {id: "02", text: "Các chuyên gia Nhật Bản đã xây dựng một công thức hoàn hảo không chỉ tập trung vào Canxi mà còn có các thành phần khác như Men chứa kẽm, Peptide lòng đỏ trứng, vitamin D3... Sự kết hợp này sẽ giúp xương phát triển tối đa để tăng chiều cao cho trẻ và ưu việt hơn rất nhiều so với những sản phẩm tăng cường chiều cao thông thường chỉ đơn thuần tập trung vào 1 thành phần tốt cho xương là canxi."},
                    {id: "03", text: "Đây là một sản phẩm với công thức không chỉ giúp hấp thụ nhóm các chất dinh dưỡng để tăng chiều cao từ sản phẩm mà còn hấp thụ canxi tự nhiên (thông qua thức ăn hàng ngày: trứng, sữa, phomai, tôm, cua, …) bằng cách đề cao nhóm 3 lợi khuẩn axit lactic, Bifidobacteria và Oligosaccharide giúp trẻ có 1 hệ tiêu hóa khỏe mạnh hấp thu & chuyển hóa các chất dinh dưỡng ở mức cao nhất. Sức khỏe đường ruột chiếm 70% sức khỏe tổng thể nên đây là yếu tố cốt lõi giúp trẻ có 1 cơ thể khỏe mạnh & tăng chiều cao tối đa"},
                    {id: "04", text: "Thành phần có vitamin tổng hợp, keo ong… và các dưỡng chất cần thiết khác giúp trẻ có có hệ hô hấp và cơ thể khỏe mạnh, phòng ngừa sự tấn công của các loại vi khuẩn và vi rút, tăng cường sức đề kháng và khả năng miễn dịch."},
                    {id: "05", text: "Sản phẩm không chỉ giúp trẻ phát triển về thể chất, chiều cao mà còn giúp trẻ tăng cường trí nhớ, phát triển trí thông minh nhờ có thành phần DHA, EPA và Phosphatidylserine giúp cải thiện chức năng não bộ, phát triển kích thích tế bào não."},
                    {id: "06", text: "Mùi vị thơm ngon, độ ngọt vừa phải và không có đường có thể gây sâu răng cho trẻ; Bào chế dạng nước có khả năng hấp thu tốt nhất cho cơ thể so với các dạng bào chế khác; 1 gói 30ml tiện lợi để sử dụng và bảo quản."},
                    {id: "07", text: "Sản xuất tại nhà máy đạt chuẩn GMP có tiêu chuẩn chất lượng khắt khe về nguyên liệu, máy móc, công nghệ, quy trình sản xuất và chất lượng thành phẩm với đội ngũ chuyên gia hàng đầu nghiên cứu về nguồn dinh dưỡng & phát triển toàn diện của trẻ"}]
    return (
      <>
        <h2 className='font-bold text-3xl md:text-4xl mx-auto text-center mb-8 text-white'>Lợi ích của Grow Plus+</h2>
        <div className='md:flex flex-wrap justify-around md:my-16'>
            {texts.map(i => 
              <div key={i.id} className='flex w-[90%] md:w-[34%] my-16 md:my-8 mx-auto md:mx-0 bg-[#3b8b59] items-center py-16 relative rounded-3xl border-4 border-white'>
                <div className='h-24 w-24 rounded-full bg-[#9ec7a5] absolute top-[-50px] md:top-[-36px] left-[35.5%] md:left-[-36px] border-8 border-white flex items-center justify-center text-white text-4xl font-bold'>{i.id}</div>
                <div className='flex-1 mx-6 text-center text-white'>{i.text}</div>
              </div>
            )}
        </div>
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
      <div className='bg-[url(/public/ed936cd603a9d1f788b8.jpg)] bg-[length:200%_100%] md:bg-[length:100%_100%] flex flex-col justify-center relative z-0'>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#3b8b59] opacity-80 z-0'></div>
        <div className='relative z-10 backdrop-blur-[0.5px] h-full'>
          <h2 className='text-center font-bold text-3xl md:text-4xl z-10 mt-20 text-white'>Grow Plus+</h2>
          <p className='text-xl text-center mt-4 md:mb-0 mb-20 text-white'>Giúp mẹ chăm con nhàn rỗi và mang đến sức khỏe toàn diện cho con</p>
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
                  <p className='border-2 text-white border-white rounded-full w-16 aspect-square flex justify-center items-center text-4xl mx-auto'>{i.logo}</p>
                  <p className='md:w-3/4 mx-auto mt-4 text-white'>{i.text}</p>
              </div>
          )}  
      </div>
    )
  }

  function Accordion() {
    const texts = ["Liều dùng: 1 gói 1 ngày", "Nên uống buổi sáng sau hoặc trước khi ăn 30 phút đến 1 tiếng", "Nên sử dụng theo liệu trình tối thiểu 3 đến 5 tháng để đạt hiệu quả tối đa", "Sản phẩm có thể sử dụng duy trì thường xuyên mà không gây tác dụng phụ"]
    return (
        <div className='md:w-3/4 mx-auto mt-12'>
          <h2 className='font-bold text-3xl md:text-4xl mx-auto text-center mb-8 text-[#3b8b59] mt-20'>Cách sử dụng</h2>
          <div className="text-start my-20 rounded-3xl mx-2 md:flex justify-around">
              <div className='md:w-1/2 h-[400px] md:h-auto flex flex-col justify-between'>
                {texts.map(i => <div key={i} className='text-center h-[85px] rounded-r-xl flex justify-center items-center border-l-8 border-[#3b8b59] bg-[#dddddd] md:px-8 px-2'>{i}</div>)}
              </div>
              <img alt="" className='w-4/5 mx-auto mt-8 md:w-1/3' src="f4ce03e778d1ad8ff4c0.png"></img>
          </div>
        </div>
    )
  }
