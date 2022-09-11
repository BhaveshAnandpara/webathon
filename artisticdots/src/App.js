import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import HallOfArt from './Pages/HallOfArt/HallOfArt'
import Event from './Pages/Event/Event'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>

        <Routes>
       

          {/* <Route exact path='/' element={ <Home/> } ></Route>
          <Route exact path='/home' element={ <Home/> } ></Route> */}
          <Route exact path='/' element={ <HallOfArt/> } ></Route>
          <Route exact path='/hall-of-art' element={ <HallOfArt/> } ></Route>
          <Route exact path='/event' element={ <Event/> } ></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
