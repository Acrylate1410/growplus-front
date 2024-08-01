import { useEffect, useState } from "react";
import {BiTimeFive} from "react-icons/bi"
import {AiOutlineCheckCircle, AiOutlineCloseCircle} from "react-icons/ai"
import { MdOutlineDeliveryDining} from "react-icons/md";

export function OrderDashboard() {
    const [orderList, setOrderList] = useState({data: [], message: "Đang tải đơn hàng"})
    const [filter, setFilter] = useState("");
    const [selected, setSelected] = useState("")
    useEffect(() => {
        fetch("https://okyibhzr7o.genhosting.net/growplus/orders/get_orders").then(res => res.json()).then(data => {
          setOrderList({data: data || [], message: ""})
        }).catch(error => {})
    }, []);

    const updateStatus = (id, currentStatus) => {
        let newStatus;
        currentStatus === "Chưa giao hàng" ? newStatus = "Đang giao hàng" : newStatus = "Đã giao hàng thành công"
        fetch("https://okyibhzr7o.genhosting.net/growplus/orders/update/" + id, {
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
                setSelected("")
            }
        }).catch(error => {})
    }
    return (
        <div className="w-full overflow-hidden relative">
            <div className={selected !== "" ? "fixed top-0 bottom-0 right-0 left-0" : "hidden"}>
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-60"  onClick={() => setSelected("")}></div>
                <div className="fixed left-[10%] right-[10%] top-[30%] bottom-[30%] md:left-[30%] md:right-[30%] bg-white p-8 flex flex-col justify-between rounded-xl">
                    <div>
                        <h2 className="font-bold text-2xl">Cập nhật trạng thái đơn hàng</h2>
                        <div className="border-2 border-black my-4"></div>
                        {selected.status === "Chưa giao hàng" ? 
                            <p>Bạn có chắc chắn muốn cập nhật trạng thái đơn hàng này thành  
                                <span className="font-bold"> Đang giao hàng</span> không?
                            </p> 
                            : 
                            <p>Bạn có chắc chắn muốn cập nhật trạng thái đơn hàng này thành 
                                <span className="font-bold"> Đã giao hàng thành công</span> không?
                            </p>
                        }
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center" onClick={() => setSelected("")}><span className="mr-2 text-xl"><AiOutlineCloseCircle/></span><span>Không</span></button>
                        <div className="mx-1"></div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center" onClick={() => updateStatus(selected._id, selected.status)}><span className="mr-2 text-xl"><AiOutlineCheckCircle/></span><span>Có</span></button>
                    </div>
                </div>
            </div>
            <p className="font-bold text-2xl md:text-3xl mt-4 ml-4">Đơn hàng</p>
            <div className=" w-full overflow-x-auto">
                <div className="flex mt-4 md:ml-4 w-max m-2 items-center">
                    <div className={filter === "" ? "border-b-2 border-blue-400 md:mr-8 px-4 py-2 cursor-pointer text-blue-400 overflow-hidden whitespace-nowrap text-ellipsis" : "md:mr-8 px-4 py-2 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis"} onClick={(e) => setFilter("")}>Tất cả</div>
                    <div className={filter === "Chưa giao hàng" ?  "border-b-2 border-blue-400 md:mr-8 px-4 py-2 cursor-pointer text-blue-400 overflow-hidden whitespace-nowrap text-ellipsis" : "md:mr-8 px-4 py-2 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis"} onClick={(e) => setFilter(e.target.innerText)}>Chưa giao hàng</div>
                    <div className={filter === "Đang giao hàng" ?  "border-b-2 border-blue-400 md:mr-8 px-4 py-2 cursor-pointer text-blue-400 overflow-hidden whitespace-nowrap text-ellipsis" : "md:mr-8 px-4 py-2 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis"} onClick={(e) => setFilter(e.target.innerText)}>Đang giao hàng</div>
                    <div className={filter === "Đã giao hàng thành công" ?  "border-b-2 border-blue-400 md:mr-8 px-4 py-2 cursor-pointer text-blue-400 overflow-hidden whitespace-nowrap text-ellipsis" : "md:mr-8 px-4 py-2 cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis"} onClick={(e) => setFilter(e.target.innerText)}>Đã giao hàng thành công</div>
                    <input onInput={(e) => setFilter(e.target.value)} className="border border-black h-8 outline-0 w-72" placeholder="Tìm kiếm theo tên, SĐT hoặc địa chỉ"></input>
                </div>
            </div>
            {orderList.message === "Đang tải đơn hàng" ?
                <div className="flex justify-center items-center">
                    <span className="h-8 w-8 border-4 border-x-black border-t-black border-b-transparent animate-spin rounded-full"></span>
                    <p className="m-4 font-bold text-xl">{orderList.message}</p>    
                </div> :
                <div className=" w-full overflow-x-auto">
                    <table className="table my-4 px-4 w-max md:w-full">
                        <tbody>
                            <tr>
                                <th className="px-4 md:px-0 py-2 w-[17%] overflow-hidden whitespace-nowrap text-ellipsis">Tên khách hàng</th>
                                <th className="px-4 md:px-0 py-2 w-[8%] overflow-hidden whitespace-nowrap text-ellipsis">Số điện thoại</th>
                                <th className="px-4 md:px-0 py-2 w-[8%] overflow-hidden whitespace-nowrap text-ellipsis">Số lượng</th>
                                <th className="px-4 md:px-0 py-2 w-[25%] overflow-hidden whitespace-nowrap text-ellipsis">Địa chỉ nhận hàng</th>
                                <th className="px-4 md:px-0 py-2 w-[12%] overflow-hidden whitespace-nowrap text-ellipsis">Ngày đặt hàng</th>
                                <th className="px-4 md:px-0 py-2 w-[16%] overflow-hidden whitespace-nowrap text-ellipsis">Tình trạng</th>
                                <th className="px-4 md:px-0 w-[14%]"></th>
                            </tr>
                            {orderList.data.filter(el => {
                                if (filter === '') {
                                    return true
                                } else if (filter === "Đang giao hàng" || filter === "Chưa giao hàng" || filter === "Đã giao hàng thành công") {
                                    return el.status === filter;
                                }
                                return el.name.includes(filter) || el.phone.includes(filter) || el.address.includes(filter)
                            }).map(i => 
                                <tr className="text-center" key={i._id}>
                                    <td className="py-2">{i.name}</td>
                                    <td className="py-2">{i.phone}</td>
                                    <td className="py-2">{i.quantity}</td>
                                    <td className="py-2">{i.address}</td>
                                    <td className="py-2">{i.date}</td>
                                    <td className="py-2">
                                        {i.status === "Chưa giao hàng" ? 
                                                <div className="border border-amber-600 px-2 py-0.5 flex items-center justify-center text-amber-600 bg-amber-200 rounded-md text-sm">
                                                    <div><BiTimeFive/></div>
                                                    <p className="ml-1 overflow-hidden whitespace-nowrap text-ellipsis">{i.status}</p>
                                                </div>
                                            : i.status === "Đang giao hàng" ?
                                                <div className="border border-blue-600 px-2 py-0.5 flex items-center justify-center  text-blue-600 bg-blue-200 rounded-md text-sm">
                                                    <div><MdOutlineDeliveryDining/></div>
                                                    <p className="ml-1 overflow-hidden whitespace-nowrap text-ellipsis">{i.status}</p>
                                                </div>
                                            : <div className="border border-green-600 px-2 py-0.5 flex items-center justify-center text-green-600 bg-green-200 rounded-md text-sm">
                                                    <div><AiOutlineCheckCircle/></div>
                                                    <p className="ml-1 overflow-hidden whitespace-nowrap text-ellipsis">{i.status}</p>
                                                </div>}    
                                    </td>
                                    <td className="px-4 md:px-0 py-2">
                                        {i.status === "Chưa giao hàng" ? 
                                            <button onClick={() => setSelected(i)} className='mx-auto bg-blue-600 text-sm text-white w-40 h-8 rounded-full flex items-center justify-center border border-blue-600 hover:bg-white hover:text-blue-600 transition '>
                                                Bắt đầu giao hàng      
                                            </button>
                                            : i.status === "Đang giao hàng" ?
                                            <button onClick={() => setSelected(i)} className='mx-auto bg-green-600 text-sm text-white w-40 h-8 rounded-full flex items-center justify-center border border-green-600 hover:bg-white hover:text-green-600 transition '>
                                                Hoàn thành đơn hàng  
                                            </button> :
                                            <button className='invisible mx-auto w-40 h-8'>
                                                Hoàn thành đơn hàng  
                                            </button>
                                        }    
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
  };