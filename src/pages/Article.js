import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import FileViewer from 'react-file-viewer';
import { AiOutlineClockCircle } from "react-icons/ai";
export function Article() {
    const [article, setArticle] = useState({})
    const [params] = useSearchParams()
    useEffect(() => {
      fetch("https://growplus-api.onrender.com/articles/get_one_article/" + params.get("id")).then(res => res.json()).then(data => {
        setArticle(data || {})
      })
    }, [])
    return (
        <>
          <header className='header p-4 bg-[#9ec7a5] flex items-center justify-between fixed top-0 right-0 left-0 z-20'>
            <Link to="/">
              <div className='flex h-12 cursor-pointer'>
                <img alt="" src="logo.png"></img>
              </div>
            </Link>
          </header>
          <div className="relative">
              <img src={article.thumbnail} alt={article.title} className="mt-20 w-full h-96 object-cover"></img>
              <div className="absolute bottom-0 leading-normal flex items-center text-white text-2xl md:text-4xl font-bold px-4 md:px-28 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3b8b59] to-transparent from-50% h-44">
                {article.title}
              </div>
          </div>
          {article.date !== undefined && <div className="md:w-4/5 mx-auto px-[30px] pt-[30px] flex items-center text-sm"><AiOutlineClockCircle/><div className="ml-1.5">{article.date}</div></div> }
          {article.description !== undefined && <div className="md:w-4/5 mx-auto px-[30px] pt-[30px] font-bold text-gray-500 text-justify">{article.description}</div> }
          {article.content !== undefined && <FileViewer fileType="docx" filePath={article.content}/> } 
        </>
    )
}

