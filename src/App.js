import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ShopPage from './Pages/ShopPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import MainBlogDetails from './Component/Blog_Details/MainBlogDetails';
import MainLogin from './Component/Login/MainLogin';
import MainRegister from './Component/Register/MainRegister';
import MainWishList from './Component/Wishlist/MainWishList';
import MainAddToCard from './Component/AddToCard/MainAddToCard';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import RequireAuth from './Component/Auth/RequireAuth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/blog-details/:id' element={
          
              <MainBlogDetails/>
         
          }/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/mainlogin' element={<MainLogin/>}/> */}
          <Route path='/register' element={<Register />}/>
          <Route path='/wishlist' element={<MainWishList/>}/>
          <Route path='/add_card' element={<MainAddToCard/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App;
