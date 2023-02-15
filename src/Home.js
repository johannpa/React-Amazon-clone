import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
            <img src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg" alt="ecommerce" className="home__image" />

            <div className="home__row">
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
