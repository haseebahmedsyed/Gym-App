import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home';
import Fees from './components/feePay/Fees'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Packages from './components/Packages/Packages';
import TitaniumPlus from './components/Packages/TitaniumPlus';
import Titanium from './components/Packages/Titanium';
import Platinium from './components/Packages/Platinium';
import Gold from './components/Packages/Gold';
import Silver from './components/Packages/Silver';
import ShopItems from './components/shop/ShopItems';
import Cart from './components/shop/Cart';
import CartState from './context/cartState';
import Bill from './components/shop/Bill';
import Contact from './components/contactUs/Contact';
import Facilities from './components/facilities/Facilities';
import RegisterNow from './components/register/RegisterNow';
import AboutUs from './components/aboutUs/AboutUs';
import Login from './components/login/Login';
import MemberState from './context/contextMember/MemberState';
import Profile from './components/profile/Profile';
import Dashfees from './components/dashFees/dashfees';
import PaidUser from './components/dashFees/paiduser/Paiduser';
import FeesState from './context/contextFees/FeesState';
import UnpaidUser from './components/dashFees/unpaiduser/UnpaidUser';
import NewMembers from './components/dashFees/newmembers/NewMembers';
import DashOrders from './components/dashorders/DashOrders';
import AllOrders from './components/dashorders/allorders/AllOrders';
import DeliveredOrders from './components/dashorders/deliveredorders/DeliveredOrders';
import PendingOrders from './components/dashorders/pendingorders/PendingOrders';

import Dashboard from './components/Deeshboard/Dashboard';
import AddItemsm from './components/dashAddItems/AddItemsm';

import LoadingBar from 'react-top-loading-bar'
import { useContext, useState } from 'react';
import DashContacts from './components/dashContacts/DashContacts';

import feesContext from './context/contextFees/feescontext';

function App() {

  const [topProgress , setTopProgress] = useState(0)

  return (
    <>
      <Router>
        <FeesState>
          <MemberState>
            <CartState>
              <div className="App ">

              <LoadingBar
          color='#f11946'
          progress={topProgress}/>

                <Navbar />

                <Routes>
                  <Route path='/' exact element={<Home progress={setTopProgress} />} />
                  <Route path='package' exact element={<Packages progress={setTopProgress} />}>
                    <Route path='' exact element={<TitaniumPlus progress={setTopProgress} />} />
                    <Route path='titanium' exact element={<Titanium progress={setTopProgress} />} />
                    <Route path='platinium' exact element={<Platinium progress={setTopProgress} />} />
                    <Route path='gold' exact element={<Gold progress={setTopProgress} />} />
                    <Route path='silver' exact element={<Silver progress={setTopProgress} />} />
                  </Route>
                  <Route path='shop' exact element={<ShopItems progress={setTopProgress} />} /> 
                  <Route path='cart' exact element={<Cart progress={setTopProgress} />} />
                  <Route path='checkout' exact element={<Bill progress={setTopProgress} />} />
                  <Route path='contact' exact element={<Contact progress={setTopProgress} />} />
                  <Route path='facilities' exact element={<Facilities progress={setTopProgress} />} />
                  <Route path='register' exact element={<RegisterNow progress={setTopProgress} />} />
                  <Route path='aboutUs' exact element={<AboutUs progress={setTopProgress} />} />
                  <Route path='login' exact element={<Login progress={setTopProgress} />} />
                  <Route path='payFees' exact element={<Fees progress={setTopProgress} />} />
                  <Route path='profile' exact element={<Profile progress={setTopProgress} />} />
                  <Route path='dashboard' exact element={<Dashboard progress={setTopProgress} />} />
                  <Route path='feeinspect' exact element={<Dashfees progress={setTopProgress} />}>
                    <Route path='paiduser' exact element={<PaidUser progress={setTopProgress} />} />
                    <Route path='unpaiduser' exact element={<UnpaidUser progress={setTopProgress} />} />
                    <Route path='' exact element={<NewMembers progress={setTopProgress} />} />
                  </Route>

                  <Route path='orderinspect' exact element={<DashOrders progress={setTopProgress} />}>
                    <Route path='' exact element={<AllOrders progress={setTopProgress} />} />
                    <Route path='delivered' exact element={<DeliveredOrders progress={setTopProgress} />} />
                    <Route path='pending' exact element={<PendingOrders progress={setTopProgress} />} />
                  </Route>

                  <Route path='contactInspect' exact element={<DashContacts/>}/>

                  <Route path='additem' exact element={<AddItemsm progress={setTopProgress} />}/>

                </Routes>




              </div>


            </CartState>
          </MemberState>
        </FeesState>
      </Router>

    </>
  );
}

export default App;
