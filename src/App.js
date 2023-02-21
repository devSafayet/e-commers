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
import MainSign from './Component/SignIn/MainSign';
import SignUp from './Component/SignUp/SignUp';

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
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/signin' element={<MainSign/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<MainLogin/>}/>
          <Route path='/register' element={<MainRegister/>}/>
          <Route path='/wishlist' element={<MainWishList/>}/>
          <Route path='/add_card' element={<MainAddToCard/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App;
