import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ShopPage from './Pages/ShopPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import MainBlogDetails from './Component/Blog_Details/MainBlogDetails';
import MainBlogMoreText from './Component/Blog_More_text/MainBlogMoreText';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/blog-details/:id' element={<MainBlogDetails/>}/>
          {/* <Route path='/blog-more/:id' element={<MainBlogMoreText/>}/> */}
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App;
