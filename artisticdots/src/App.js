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
       

<<<<<<< HEAD
          <Route exact path='/' element={ <Home/> } ></Route>
          <Route exact path='/home' element={ <Home/> } ></Route>
          <Route exact path='/hall-of-art' element={ <HallOfArt/> } ></Route>
=======
<<<<<<< HEAD
          <Route exact path='/' element={ <Home/> } ></Route>
          <Route exact path='/home' element={ <Home/> } ></Route>
          {/* <Route exact path='/' element={ <HallOfArt/> } ></Route> */}

          <Route exact path='/hall-of-art' element={ <HallOfArt/> } ></Route>
=======
          {/* <Route exact path='/' element={ <Home/> } ></Route>
          <Route exact path='/home' element={ <Home/> } ></Route> */}
          {/* <Route exact path='/' element={ <HallOfArt/> } ></Route>
          <Route exact path='/hall-of-art' element={ <HallOfArt/> } ></Route> */}
          
>>>>>>> fd7255da407b99440eb1b11ec8ee8a33c78cc27b
>>>>>>> 7c48d14e41c13f0fa849ec1d84af83118136e800
          <Route exact path='/event' element={ <Event/> } ></Route>
        </Routes>
    <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
