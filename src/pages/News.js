import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export function News() {
    const [articleList, setArticleList] = useState([])
    const [filter, setFilter] = useState([])
    const [searchToggle, setSearchToggle] = useState("hidden")

    useEffect(() => {
      fetch("https://growplus-api.onrender.com/articles/get_articles").then(res => res.json()).then(data => {
        setArticleList(data || [])
      }).catch(error => {})
    }, []);
    return (
        <>
        <header className='header p-4 bg-white flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
              <Link to="/">
                <div className='flex h-12 cursor-pointer'>
                  <img alt="" src="growplus.png" className='w-48 h-30 object-cover'></img>
                </div>
              </Link>
              <AiOutlineSearch className="text-3xl cursor-pointer" onClick={() => searchToggle === "hidden" ? setSearchToggle("") : setSearchToggle("hidden")}/>
              <input className={searchToggle + " p-2 right-14 md:w-96 rounded-lg outline-0 absolute"} placeholder="Tìm bài viết theo tiêu đề" onInput={(e) => setFilter(e.target.value)}></input>
          </header>
            <div className="mt-28"></div>
            {articleList.filter(el => {
                if (filter === '') {
                    return true
                }
                return el.title.includes(filter) || el.description.includes(filter) || el.date.includes(filter)
            }).map(i =>
              <Link to={"/article?id=" + i._id} className="flex flex-col justify-center items-center md:items-start md:flex-row mb-12 md:mx-32">
                  <div className="w-[90vw] md:w-2/5 h-48 md:mr-8"><img alt={i.title} src={i.thumbnail} className="w-full h-full object-cover"></img></div>
                  <div className="w-[90vw] mt-3 md:mt-0 md:w-3/5">
                    <p className="font-bold text-xl md:text-2xl">{i.title}</p>
                    <p className="my-2">{i.date}</p>
                    <p>{i.description}</p>
                  </div>
              </Link>  
            )}
            {articleList.length !== 0 && <Footer/>}
        </>
    )
}
