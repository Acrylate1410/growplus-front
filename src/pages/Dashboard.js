import { Suspense, useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import {CgProfile} from "react-icons/cg"
import {RxCrossCircled} from "react-icons/rx"
import {BiTimeFive} from "react-icons/bi"
import {AiOutlineCheckCircle} from "react-icons/ai"
import { IoLocationOutline} from "react-icons/io5";
import { MdOutlineDeliveryDining} from "react-icons/md";

const Dashboard = () => {
    const [orderList, setOrderList] = useState({data: [], message: "Đang tải đơn hàng"})
    const [filter, setFilter] = useState("Tất cả");
    useEffect(() => {
        fetch("http://localhost:8080/orders/get_orders").then(res => res.json()).then(data => {
          setOrderList({data: data || [], message: ""})
        })
    }, []);

    const updateStatus = (id, currentStatus) => {
        let newStatus;
        currentStatus === "Chưa giao hàng" ? newStatus = "Đang giao hàng" : newStatus = "Đã giao hàng thành công"
        fetch("http://localhost:8080/orders/update/" + id, {
            method: "PATCH",
            body: JSON.stringify({status: newStatus}),
            headers: {'Content-Type': 'application/json'},
        }).then(res => {
            if (res.status === 200) {
                const listToUpdate = [...orderList.data]
                for (let x in listToUpdate) {
                    if (id === listToUpdate[x]._id) {
                        if (listToUpdate[x].status === "Chưa giao hàng") {
                            listToUpdate[x].status = "Đang giao hàng"
                        } else {
                            listToUpdate[x].status = "Đã giao hàng thành công"
                        }
                    }
                }
                setOrderList(previousState => {return {...previousState, data: listToUpdate}})
            }
        })
    }
    return (
        <div className="w-full">
            <p className="font-bold text-3xl mt-4 ml-4">Đơn hàng</p>
            <div className="flex mt-4 ml-4">
                <div className={filter === "Tất cả" ? "border-b-2 border-blue-400 mr-8 px-4 py-2 cursor-pointer text-blue-400" : "mr-8 px-4 py-2 cursor-pointer"} onClick={(e) => setFilter(e.target.innerText)}>Tất cả</div>
                <div className={filter === "Chưa giao hàng" ?  "border-b-2 border-blue-400 mr-8 px-4 py-2 cursor-pointer text-blue-400" : "mr-8 px-4 py-2 cursor-pointer"} onClick={(e) => setFilter(e.target.innerText)}>Chưa giao hàng</div>
                <div className={filter === "Đang giao hàng" ?  "border-b-2 border-blue-400 mr-8 px-4 py-2 cursor-pointer text-blue-400" : "mr-8 px-4 py-2 cursor-pointer"} onClick={(e) => setFilter(e.target.innerText)}>Đang giao hàng</div>
                <div className={filter === "Đã giao hàng thành công" ?  "border-b-2 border-blue-400 mr-8 px-4 py-2 cursor-pointer text-blue-400" : "mr-8 px-4 py-2 cursor-pointer"} onClick={(e) => setFilter(e.target.innerText)}>Đã giao hàng thành công</div>
            </div>
            {orderList.message === "Đang tải đơn hàng" ?
                <div className="flex justify-center items-center">
                    <span className="h-8 w-8 border-4 border-x-black border-t-black border-b-transparent animate-spin rounded-full"></span>
                    <p className="m-4 font-bold text-xl">{orderList.message}</p>    
                </div> :
                <table className="table my-4 px-4 w-full">
                <tr>
                    <th className="py-2 w-[17%]">Tên khách hàng</th>
                    <th className="py-2 w-[8%]">Số điện thoại</th>
                    <th className="py-2 w-[8%]">Số lượng</th>
                    <th className="py-2 w-[25%]">Địa chỉ nhận hàng</th>
                    <th className="py-2 w-[12%]">Ngày đặt hàng</th>
                    <th className="py-2 w-[16%]">Tình trạng</th>
                    <th className="w-[14%]"></th>
                </tr>
                {orderList.data.filter(el => {
                    if (filter === 'Tất cả') {
                        return true
                    }
                    return el.status === filter;
                }).map(i => 

                    <tr className="text-center">
                      <td className="py-2">{i.name}</td>
                      <td className="py-2">{i.phone}</td>
                      <td className="py-2">{i.quantity}</td>
                      <td className="py-2">{i.address + ", " + i.subdivision + ", " + i.district + ", " + i.city}</td>
                      <td className="py-2">{i.date}</td>
                      <td className="py-2">
                      {i.status === "Chưa giao hàng" ? 
                                <div className="border border-amber-600 px-2 py-0.5 flex items-center justify-center text-amber-600 bg-amber-200 rounded-md text-sm">
                                    <div><BiTimeFive/></div>
                                    <p className="ml-1">{i.status}</p>
                                </div>
                            : i.status === "Đang giao hàng" ?
                                <div className="border border-blue-600 px-2 py-0.5 flex items-center justify-center  text-blue-600 bg-blue-200 rounded-md text-sm">
                                    <div><MdOutlineDeliveryDining/></div>
                                    <p className="ml-1">{i.status}</p>
                                </div>
                            : <div className="border border-green-600 px-2 py-0.5 flex items-center justify-center text-green-600 bg-green-200 rounded-md text-sm">
                                    <div><AiOutlineCheckCircle/></div>
                                    <p className="ml-1">{i.status}</p>
                                </div>}    

                      </td>

                      <td className="py-2">
                      {i.status === "Chưa giao hàng" ? 
                            <button onClick={() => updateStatus(i._id, i.status)} className='mx-auto bg-blue-600 text-sm text-white w-40 h-8 rounded-full flex items-center justify-center border border-blue-600 hover:bg-white hover:text-blue-600 transition '>
                                Bắt đầu giao hàng      
                            </button>
                            : i.status === "Đang giao hàng" ?
                            <button onClick={() => updateStatus(i._id, i.status)} className='mx-auto bg-green-600 text-sm text-white w-40 h-8 rounded-full flex items-center justify-center border border-green-600 hover:bg-white hover:text-green-600 transition '>
                                Hoàn thành đơn hàng  
                            </button> :
                            <button className='invisible mx-auto bg-green-600 text-sm text-white w-40 h-8 rounded-full flex items-center justify-center border border-green-600 hover:bg-white hover:text-green-600 transition '>
                                Hoàn thành đơn hàng  
                            </button>
                            }    

                      </td>
                    </tr>
                )}
            </table>
            }
            
        </div>
    )
  };
export default Dashboard;