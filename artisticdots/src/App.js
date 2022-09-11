import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import HallOfArt from './Pages/HallOfArt/HallOfArt'
import Event from './Pages/Event/Event'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
        <Routes>
       

          {/* <Route exact path='/' element={ <Home/> } ></Route>
          <Route exact path='/home' element={ <Home/> } ></Route> */}
          {/* <Route exact path='/' element={ <HallOfArt/> } ></Route>
          <Route exact path='/hall-of-art' element={ <HallOfArt/> } ></Route> */}
          
          <Route exact path='/event' element={ <Event/> } ></Route>
        </Routes>
    <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
