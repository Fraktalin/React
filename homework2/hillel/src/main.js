import React from "react";
import './style/reset.css';
import './style/main.css';
class main extends React.Component{

  changeImage (e) {
    e.target.previousElementSibling.classList.toggle('product-image--focus')
  }
  render() {
    return (
    <main className='main-section'>
      <div className='product-item'>
        <span>product</span>
        <div className='product-image'></div>
        <button onClick= {this.changeImage} className='product-buttun'>Show</button>
      </div>
      <div className='product-item'>
        <span>product</span>
        <div className='product-image'></div>
        <button onClick= {this.changeImage} className='product-buttun'>Show</button>
      </div>
      <div className='product-item'>
        <span>product</span>
        <div className='product-image'></div>
        <button onClick= {this.changeImage} className='product-buttun'>Show</button>
      </div>
      <div className='product-item'>
        <span>product</span>
        <div className='product-image'></div>
        <button onClick= {this.changeImage} className='product-buttun'>Show</button>
      </div>
      <div className='product-item'>
        <span>product</span>
        <div className='product-image'></div>
        <button onClick= {this.changeImage} className='product-buttun'>Show</button>
      </div>
      <div className='product-item'>
        <span>product</span>
        <div className='product-image'></div>
        <button onClick= {this.changeImage} className='product-buttun'>Show</button>
      </div>
    </main>
    )
  }
}


export default main;
