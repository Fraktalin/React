import React from "react";
import './style/reset.css';
import './style/header.css';
class App extends React.Component{
  render() {
    return (
    <header className='main-header'>
      <h2 className='main-title'>hello</h2>
      <ul className='header-list'>
        <li className='header-list-item'>home</li>
        <li className='header-list-item'>products</li>
        <li className='header-list-item'>contacts</li>
      </ul>
    </header>
    )
  }
}


export default App;
