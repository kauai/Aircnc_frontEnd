import React from 'react';
import './App.css';
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
       <img src={ logo }/>
       <div className="content">
         <p>Ofereça <b>spots</b> para programadores e encontre <b>talentos</b> para sua empresa</p>
          <form action="#">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder="Seu melhor email"/>
            <button className="btn" type="submit">Entrar</button>
          </form>
       </div>
    </div>
  );
}

export default App;
