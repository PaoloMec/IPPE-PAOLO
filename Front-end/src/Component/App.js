import React from 'react';
import '../CSS/App.css';
import Login from './Login';
import Reset from './Reset'; 
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';







function App() {
  return (
  <div className='container-fluid app'>
    {/* <Login/>
    <Reset/>
    <Sidebar/> */}
    
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>    
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/> 
        <Route path='/navbar' element={<Navbar/>}/> 
      </Routes>
    </Router>
  </div>
  );
}

export default App;
