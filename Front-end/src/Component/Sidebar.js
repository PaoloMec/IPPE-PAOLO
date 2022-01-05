import React from 'react';
import '../CSS/Sidebar.css';
import user from '../Assets/user.svg';
import notifica from '../Assets/notifica.svg';



function Sidebar() {
    return (
      <div className='container-fluid p-0 box1'>
        <div className='box2'>

          <div className='box3'>
            <img className="notifica" src={notifica} alt="notifica"/>
            <img className="user" src={user} alt="user"/>
          </div>
           
          <text className='connessi'>Connessi</text> 
          <div className='bordo-connessi'>
            <table>
            <tr><td className='icon-user-connessi'></td><td>ciad</td></tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>
            <tr> ciao</tr>

            </table>

          </div>

          <text className='assenti'>Assenti</text> 
          <div className='bordo-assenti'>



          </div>
              
        </div>
      </div>



    );
  }


  
  export default Sidebar;