import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export function News() {
    const [articleList, setArticleList] = useState([])
    const [filter, setFilter] = useState([])
    const [searchToggle, setSearchToggle] = useState("hidden")

    useEffect(() => {
      fetch("https://growplus-api.onrender.com/articles/get_articles").then(res => res.json()).then(data => {
        setArticleList(data || [])
      })
    }, []);
    return (
        <>
            <header className='header p-4 bg-[#9ec7a5] flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
              <Link to="/">
                <div className='flex h-12 cursor-pointer'>
                  <img alt="Grow Plus+" src="logo.png"></img>
                </div>
              </Link>
              <AiOutlineSearch className="text-3xl" onClick={() => searchToggle === "hidden" ? setSearchToggle("") : setSearchToggle("hidden")}/>
              <input className={searchToggle + " p-2 right-14 md:w-96 rounded-lg outline-0 absolute"} placeholder="Tìm bài viết theo tiêu đề" onInput={(e) => setFilter(e.target.value)}></input>
            </header>
            <div className="mt-28"></div>
            {articleList.filter(el => {
                if (filter === '') {
                    return true
                }
                return el.title.includes(filter) || el.description.includes(filter) || el.date.includes(filter)
            }).map(i =>
              <Link to={"/article?id=" + i._id} className="flex flex-col justify-center md:flex-row mb-12 md:w-fit">
                  <div className="w-9/10 md:w-1/5 h-48"><img alt={i.title} src={i.thumbnail} className="w-full h-full object-cover mx-4 md:mx-8"></img></div>
                  <div className="mx-12 mt-3 md:mt-0 md:w-3/5">
                    <p className="font-bold text-xl md:text-3xl">{i.title}</p>
                    <p>{i.date}</p>
                    <p>{i.description}</p>
                  </div>
              </Link>  
            )}
        </>
    )
}
