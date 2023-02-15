import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat, magni possimus autem at placeat similique dolor modi facilis, magnam obcaecati ab illo. Nostrum, minima enim eos molestiae voluptatum velit.</p>
            <p className="product__price">
                <small>$</small>
                <strong>30</strong>
            </p>
            <div className="product__rating">:⭐⭐</div>
        </div>

        <img src="https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="product" />

        <button>Add to Basket</button>
      </div>
    </div>
  )
}

export default Product;
