import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Referal from './Pages/Referal';
import Contact from './Pages/Contact';
import Pagenotfound from './Pages/Pagenotfound';
import BGMI from './Pages/BGMI';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/referal' element={<Referal/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/bgmi' element={<BGMI/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
