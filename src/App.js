import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className=" bg-gray-500" >
      <BrowserRouter>
      {/* <Navbar/>  */}
      <Routes>
        <Route path='/' element={  <Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
