import React from "react";
import './style/reset.css';
import './style/footer.css';
class App extends React.Component{
  render() {
    return (
    <footer className='main-footer'>
      <a className='main-footer-link' href='google.com'>home</a>
      <span className='main-footer-text'>copyright (c)</span>
      <div  className='footer-soc-wrap'>
        <a className='main-footer-link' href='instagram.com'>insta</a>
        <a className='main-footer-link' href='facebook.com'>face</a>
        <a className='main-footer-link' href='licnkedin.com'>link</a>
      </div>
    </footer>
    )
  }
}


export default App;
