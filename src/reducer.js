export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);

export const initialState = {
  basket : [],
  user : null
}

const reducer = (state, action)=>
{
  switch (action.type)
  {
    case "ADD_TO_BASKET" :
    //logic to adding into basket
    return {...state, basket : [...state.basket, action.item]}

    case "REMOVE_FROM_BASKET" :
    let newBasket = [...state.basket];
    const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
    if(index >= 0)
    {
      newBasket.splice(index , 1);
      // item exist in basket remove it
    }
    else
    {
      console.warn(`cannot remove the product (id : ${action.id}) as it not exist`);
    }
    return {...state , basket : newBasket}

    default:
    return state;
  }
}
export default reducer;
