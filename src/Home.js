import React from 'react'
import './Home.css'
import Product from './Product';
import {data} from './data';

function Home() {

  var itemData1 = data.slice(0 , 2).map((dataElement)=>(
    <Product key={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

  var itemData2 = data.slice(2 , 5).map((dataElement)=>(
    <Product key={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

  var itemData3 = data.slice(5 , 7).map((dataElement)=>(
    <Product key={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

  var itemData4 = data.slice(7 , 9).map((dataElement)=>(
    <Product key={dataElement.id}
      title={dataElement.title}
      price={dataElement.price}
      rating={dataElement.rating}
      image={dataElement.image}
      />
  ))

  var itemData5 = data.slice(9).map((dataElement)=>(
    <Product key={dataElement.id}
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
    {itemData1}
  </div>
  <div className="home_row">
    {itemData2}
  </div>
  <div className="home_row">
    {itemData3}
  </div>
  <div className="home_row">
    {itemData4}
  </div>
  <div className="home_row">
    {itemData5}
  </div>
</div>)
}

export default Home
