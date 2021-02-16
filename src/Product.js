import React from 'react'
import "./product.css";
import useStateValue from './DataLayer';
import {useState} from 'react';


function Product({id , title , image , price , rating}) {

  var [quantity , setQantity ] = useState(0);



  const [{basket} , dispatch] = useStateValue();
  const addToBasket = () => {

    // add a item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item : {
        id , title , image , price , rating , quantity
      }
    })
  }

  const setQantityHanlder = (e)=>{
    backupQuantity = null;
    let value = e.target.value;
    setQantity(value);
  }
  var backup = basket.filter((basketItem)=> basketItem.id === id);

  if(backup.length)  // use to get the most recent value
  { if(backup.length >= 0)
    var backupLenght = backup.length-1;
    var backupQuantity = backup[backupLenght].quantity;
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(rating)
            .fill()
            .map((_ , index )=> <p key={index}>⭐</p>)
          }
        </div>
      </div>
      <img src={image} alt=""/>
      <div className="footer">

      <div>
      <label htmlFor="quantity">Quantity</label>
      <select name="quantity" className="quantity" value={ quantity  ? quantity : backupQuantity } onChange={setQantityHanlder}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
    </div>
  )
}

export default Product
