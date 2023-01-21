import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import cartContext from '../../context/cartContext';
import memberContext from '../../context/contextMember/memberContext';

function Navbar() {
  let location = useLocation();




  const [mystate, setMyState] = useState(true)

  const context = useContext(cartContext);
  const anotherContext = useContext(memberContext);
  const { role, IsAuthentic, name,LogoutMember } = anotherContext;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1) {
        setMyState(false)
      }
      else {
        setMyState(true)
      }
    })
  }, [])

  const handleLogout=()=>{
    LogoutMember();
  }


  return (
    <>
      <div className='mydiv'>
        {mystate ?
          <header className='mydiv'>
            <div id="main-head" >
              <h1 id="main-head-content">THE MUSCLE STUDIO</h1>
              {
                (role === null && name === null && IsAuthentic === false) ?
                  <Link to='/login' className="login-btn-of-main-heading">LOGIN</Link> :
                   <div className="dropdown">
                    <button id='loginName' className="btn btn-secondary dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">
                      {name}
                    </button> 
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      {
                        (role ==='admin') ?    
                        <li><Link className="dropdown-item" to='/dashboard'>Dash Board</Link></li> :
                        <li><Link className="dropdown-item" to="/payFees">Pay Fees</Link></li>
                      }
                      <li><Link className="dropdown-item" to='/profile'>Profile</Link></li>
                      <li><button className="dropdown-item" onClick={handleLogout}>LogOut</button></li>
                    </ul>
                  </div>
              }

            </div>
            <div id="navbar">
              <ul className="ul-nav ">
                <li className={location.pathname==='/'?"active li-nav":"li-nav"}><Link className="nav-button nav-active" to="/">Home</Link></li>
                <li className={location.pathname==="/contact"?"active li-nav":"li-nav"}><Link className="nav-button" to="/contact">Contact Us</Link></li>
                <li className={location.pathname==='/aboutUs'?"active li-nav":"li-nav"}><Link className="nav-button" to="/aboutUs">About Us</Link></li>
                <li className={location.pathname==='/facilities'?"active li-nav":"li-nav"}><Link className="nav-button" to="/facilities">Facilities</Link></li>
                <li className={location.pathname==='/shop'?"active li-nav":"li-nav"}><Link className="nav-button" to="/shop">Shop Gear</Link></li>
                <li className={location.pathname==='/package'?"active li-nav":"li-nav"}><Link className="nav-button" to="/package">Packages</Link></li>

                <li className={location.pathname==='/register'?"active li-nav li-nav-member":"li-nav li-nav-member"} ><Link className="nav-button" to="/register">Register Now <i
                  className="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i></Link></li>
                {((location.pathname === '/shop') || (location.pathname === '/cart') || (location.pathname === '/checkout')) && <li className="li-nav-after"><Link id='cart-num' className="nav-button btn-danger" to="/cart">({context.myItems === null ? 0 : context.myItems}) Item(s) </Link></li>}
              </ul>
            </div>
          </header> :
          <header >
            <div id="navbar-2" style={{ position: 'fixed', zIndex: '1',top:'0' }}>
              <ul className="ul-nav-after">
                <li className={location.pathname==='/'?"active li-nav-after":"li-nav-after"}><Link className="nav-button nav-active" to="/">Home</Link></li>
                <li className={location.pathname==="/contact"?"active li-nav-after":"li-nav-after"}><Link className="nav-button" to="/contact">Contact Us</Link></li>
                <li className={location.pathname==='/aboutUs'?"active li-nav-after":"li-nav-after"}><Link className="nav-button" to="/aboutUs">About Us</Link></li>
                <li className={location.pathname==='/facilities'?"active li-nav-after":"li-nav-after"}><Link className="nav-button" to="/facilities">Facilities</Link></li>
                <li className="li-nav-after" id="main-head-content-after">THE MUSCLE STUDIO</li>
                <li className={location.pathname==='/shop'?"active li-nav-after":"li-nav-after"}><Link className="nav-button" to="/shop">Shop Gear</Link></li>
                <li className={location.pathname==='/package'?"active li-nav-after":"li-nav-after"}><Link className="nav-button" to="/package">Packages</Link></li>

                <li className={location.pathname==='/register'?"active li-nav-after li-nav-member":"li-nav-after li-nav-member"}>
                  <Link className="nav-button nav-button-member " to="/register">Register Now <i
                    className="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i></Link>
                </li>
                {((location.pathname === '/shop') || (location.pathname === '/cart') || (location.pathname === '/checkout')) && <li className="li-nav-after"><Link className="nav-button btn-danger" to="/cart">({context.myItems === null ? 0 : context.myItems}) Item(s)</Link></li>}

              </ul>
            </div>
          </header>
        }
      </div>
    </>
  )
}

export default Navbar
