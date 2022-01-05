import React from "react";
import '../CSS/Reset.css';
import logo from '../Assets/logo.svg';


function Reset() {
    return (
      <div className="container-fluid reset">
        
        <img className="logo" src={logo} alt="logo"/>

        <div className="box-principale">
          <text className="resetta-password">Resetta la tua Password</text>
          <text className="inserisci-mail">Inserisci la tua mail</text>
          <input className="input-inserisci-mail" type="username" placeholder="Inserisci la tua mail"></input>
          <button className="button-invia-codice">Invia codice</button> 
        </div>

        <text className="torna-indietro"><a className="return" href="/">Torna indietro</a></text>
 
      </div>
    );
  }
  

  export default Reset;