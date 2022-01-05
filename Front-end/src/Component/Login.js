import React from "react";
import '../CSS/Login.css';
import logo from '../Assets/logo.svg';


function Login() {
    return (
      <div className="login container-fluid">
      
        <img className="logo" src={logo} alt="logo"/>

        <div className="box-principal">
          <text className="ben-tornato">Ben tornato</text>
          <text className="inserisci-credenziali">Inserisci le credenziali per accedere</text>
          <input className="input-inserisci-mail" type="username" placeholder="Inserisci la tua mail"></input>
          <input className="input-inserisci-password" type="password" placeholder="Inserisci la tua password"></input>
          <button className="button-entra" type="submit">Entra</button> 
        </div>
        
        <text className="password-dimenticata">Password dimenticata? <a className="rese" href="/reset"> Recupera la Password</a> </text>

      </div>
    );
  }
  

  export default Login