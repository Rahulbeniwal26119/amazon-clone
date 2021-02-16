import React from 'react'
import './Home.css'
import Product from './Product';
import {data} from './data';

function Home() {

  var itemRow1 = data.slice(0 , 2).map((dataElement)=>(
    <Product
      id={dataElement.id}
      key={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

  var itemRow2 = data.slice(2 , 5).map((dataElement)=>(
    <Product key={dataElement.id}
      id={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

  var itemRow3 = data.slice(5 , 7).map((dataElement)=>(
    <Product key={dataElement.id}
      id={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

  var itemRow4 = data.slice(7 , 9).map((dataElement)=>(
    <Product key={dataElement.id}
      id={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

  var itemRow5 = data.slice(9).map((dataElement)=>(
    <Product key={dataElement.id}
      id={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

return (<div className="home">
  <img className="home_image"
    src={require("./Banner.png").default}
  />
  <div className="home_row">
    {itemRow1}
  </div>
  <div className="home_row">
    {itemRow2}
  </div>
  <div className="home_row">
    {itemRow3}
  </div>
  <div className="home_row">
    {itemRow4}
  </div>
  <div className="home_row">
    {itemRow5}
  </div>
</div>)
}

export default Home
