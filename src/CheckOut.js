import React from 'react'
import useStateValue from './DataLayer';
import CheckoutProduct from './CheckoutProduct';
import './checkout.css';
import SubTotal from './SubTotal';
function CheckOut() {

  const [{basket}] = useStateValue();

  return (
    <div className="checkout">

  <div className="checkout_left">    <img className="checkout_ad"
         src={require("./discountBanner.jpg").default}
    />
    {
      basket?.length === 0 ?
       (<div>
        <h2> Your Shopping Bucket is empty</h2>
      </div>
    ) :
        (<div>
        <h2 className="checkout_title"> Your Shopping Bucket</h2>
        {/* List all the all checkout item */}
        {basket?.map(item => (
          <CheckoutProduct
            id={item.id}
             title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
        ))}
      </div>
    )}
    </div>
    {basket.length > 0 && (
      <div className="checkout_right">
        <SubTotal/>
      </div>
    )}
    </div>
  )
}

export default CheckOut
