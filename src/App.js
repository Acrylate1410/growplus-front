import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import {Suspense} from 'react';
import {Home} from './pages/Home';
import {OrderDashboard} from './pages/OrderDashboard';
import { News } from './pages/News';
import { Article } from './pages/Article';
import { ArticleUploadForm } from './pages/ArticleUploadForm';
import { NewsDashboard } from './pages/NewsDashboard';
import {NotFound} from './pages/NotFound';
import { Hiring } from './pages/Hiring';


function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="article" element={<Article/>}/>
            <Route path="order_dashboard" element={<OrderDashboard />} />
            <Route path="news_dashboard" element={<NewsDashboard />} />
            <Route path="add_article" element={<ArticleUploadForm/>}/>
            <Route path="edit_article" element={<ArticleUploadForm/>}/>
            <Route path="chinh-sach-tuyen-dai-ly" element={<Hiring/>}/>
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
