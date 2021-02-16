// use to display the items in the cart 
import React from 'react'
import './checkoutproduct.css'
import useStateValue from './DataLayer';

function CheckoutProduct({id , title , image , price , rating, quantity}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch(
      {
        type : "REMOVE_FROM_BASKET" ,
        id : id
      }
    )
  }
  return (
    <div className="checkoutProduct">
      <div className="checkoutproduct_image">
        <img src={image} className="checkoutproduct_image" alt=""/>
          </div>
          <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {
            Array(rating)
            .fill()
            .map((_ , index )=> <p key={index}>⭐</p>)
          }
        </div>
        <div>
        <span>Quantity : </span><span>{quantity}</span>
      </div>
      <button onClick={removeFromBasket} >Remove from Basket</button>

    </div>
  </div>
  )
}

export default CheckoutProduct
