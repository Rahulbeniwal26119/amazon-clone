import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import useStateValue from './DataLayer';

function Header() {
  const [{basket}] = useStateValue();

  return (
    <nav className="header">

    {/* logo on the left */}

    <Link to="/">
      {/* basket item with number representing */}
      <img className="header_logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="amazon-logo"/>
    </Link>


    {/* These three are under developement uncomment these to see the layout  */}

    {/* Search Box */}
    {/* <div className="header_search">
      <input type="text" className="header_searchInput"/>
      <SearchIcon className="header_searchIcon"/>
    </div> */}


    <div className="header_nav">

      {/* 1st link  ------Under Development*/}
      {/* <Link to="/login" className="header_link">
        <div className="header_option">
          <span  className="header_optionLineOne">Hello Rahul</span>
          <span  className="header_optionLineTwo" >Sign In</span>
        </div>
      </Link> */}

      {/* 2nd link ------Under Development*/}
      {/* <Link to="/" className="header_link">
        <div className="header_option">
          <span  className="header_optionLineOne">Return</span>
          <span  className="header_optionLineTwo" >& Orders</span>
        </div>
      </Link> */}

      {/* 3rd link ------Under Development*/}
      {/* <Link to="/" className="header_link">
        <div className="header_option">
          <span  className="header_optionLineOne">Your</span>
          <span  className="header_optionLineTwo" >Prime</span>
        </div>
      </Link> */}

      {/* 4th Link */}
      <Link to="/checkout" className="header_link">
          <div className="header_option basket_count_header">
            <span className="header_optionBasket">
              <ShoppingBasketIcon/>
            </span>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
      </Link>
    </div>
  </nav>)
}

export default Header
