import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UsersData from './Components/UsersData';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={  <Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/userData' element={<UsersData/>}></Route>

      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
