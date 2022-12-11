import React from "react"
import './Header.scss';
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";

const Header = () => {
  const { myReducer } = useStateValue();
  const [data] = myReducer;
  console.log(data.authInfo)
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <div className="header__logoName"><img src='https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png' alt='Cant Load' /></div>
        </Link>
      </div>
      <div className="header__search">
        <input />
        <SearchIcon fontSize="small" className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to='/login'>
          <div className="header__nav__user">
            <span className="header__nav__lineOne">{data.authInfo.user ? data.authInfo.user.email : 'Hello Guest'}</span>
            <span className="header__nav__lineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__nav__itemBasket">
          <Link to="/checkout">
            <ShoppingCartIcon fontSize="small" />&nbsp;{data.cartList?.length}&nbsp;Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;