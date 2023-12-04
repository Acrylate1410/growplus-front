import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export function Hiring() {
  return (
    <div className="not-found">
      <header className='header p-4 bg-white flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
              <Link to="/">
                <div className='flex h-12 cursor-pointer'>
                  <img alt="" src="growplus.png" className='w-48 h-30 object-cover'></img>
                </div>
              </Link>
      </header>
        <div className="mt-24 w-[90%] md:w-3/5 text-justify mx-auto">
        <h1 className=" font-bold text-3xl text-center mx-2 mt-4 mb-8 text-[#093489]">TUYỂN ĐẠI LÝ GROW PLUS + CHÍNH HÃNG</h1>
        <p>Nếu bạn đang:</p>
        <p>- Muốn kinh doanh sản phẩm "mẹ và bé" nhưng chưa biết phải lựa chọn mặt hàng nào uy tín, chất lượng cao.</p>
        <p>- Là đại lý phân phối các loại TPCN trên thị trường và muốn mở rộng thêm các sản phẩm đến từ Nhật Bản có chất lượng khác</p>
        <p>- Muốn trở thành đại lý/nhà phân phối chính hãng cho 1 thương hiệu, sản phẩm chất lượng, có thể đem lại thu nhập tốt hàng tháng.</p>

        <p>Trở thành nhà phân phối của GROW PLUS + sẽ là lựa chọn tuyệt vời dành cho bạn với những quyền lợi:</p>
        <p>- Chính sách chiết khấu hấp dẫn</p>
        <p>- Cơ chế hợp tác linh hoạt</p>
        <p>- Được đào tạo về sản phẩm và kỹ năng tư vấn bán hàng</p>
        <p>- Được tham gia tất cả các chương trình khuyến mãi thúc đẩy bán hàng của công ty hàng tháng, quý, năm</p>
        <p>- Được cung cấp các tư liệu (hình ảnh, video, catalogue) giúp bán hàng, CSKH</p>

        <p>Hãy liên hệ với Chúng tôi để được tư vấn chi tiết trở thành đại lý/nhà phân phối chính thức của Grow Plus+.</p>
        </div>
      <div className="w-full mt-8"><Footer/></div>
    </div>
  )
};