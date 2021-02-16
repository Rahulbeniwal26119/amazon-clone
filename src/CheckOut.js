import React from 'react'
import useStateValue from './DataLayer';
import CheckoutProduct from './CheckoutProduct';

function CheckOut() {

  const [{basket}] = useStateValue();

  return (
    <div className="checkout">

      <img className="checkout_ad"
         src={require("./discountBanner.jpg").default}
    />

    {
      basket?.length === 0 ?
       (<div>
        <h2> Your Shopping Bucket is empty</h2>
      </div>
    ) :
        (<div>
        <h2> Your Shopping Bucket</h2>
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
  )
}

export default CheckOut
