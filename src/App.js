import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ShopPage from './Pages/ShopPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App;
