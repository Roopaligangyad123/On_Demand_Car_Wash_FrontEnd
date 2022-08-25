import React from "react";
import Navbar from "./components/Navbar";
import "./Style.css";

import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./components/pages/SignUp";

// import Userlog from './components/pages/Userlog';
import Login from "./components/pages/Login";
import Booking from "./components/pages/Booking";
import Washer from "./components/pages/washer";
import WasherLog from "./components/pages/Washerlog";
import Admin from "./components/pages/Admin";

import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Payment from "./components/pages/payment";
import Profile from "./components/pages/Profile";
import Footer from "./components/pages/Footer";
import AdminLog from "./components/pages/AdminLog";
import AdminHome from "./components/pages/AdminPage";
import AdminNavbar from "./components/pages/AdminNab";
import WasherHome from "./components/pages/WasherHome";
import WasherNavbar from "./components/pages/WasherNav";
import UserHome from "./components/pages/UserHome";
import UserNavbar from "./components/pages/UserNavbar";
import WasherProfile from "./components/pages/WasherProfile";
import UserLogin from "./components/UserLogin";
import UserSign from "./components/UserSign";
import PaymentOpen from "./Payment Component/PaymentOpen";
import DeleteOrder from "./components/pages/DeleteOrder";
import WasherLogin from "./components/pages/WasherLogin";
import DeleteWasher from "./components/DeleteWasher";
import UserPack from "./components/pages/UserPack";
import AdminOrders from "./components/pages/AdminOrders";
import AddPacks from "./components/pages/AddPacks";
import UpdatePack from "./components/pages/UpdatePack";
import WashersignUp from "./components/pages/WashersignUp";
import AcceptOrder from "./components/AcceptOrder";
import Adminpack from "./components/Adminpack";
import AuthService from "./components/AuthService";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packs" element={<UserPack/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/Userlogin" element={<UserLogin />} />
          <Route path="/Usersign" element={<UserSign />} />
          <Route path="/Payment" element={<PaymentOpen />} />
          <Route path="/addPacks" element={<AddPacks />} />
          <Route path='/updatePack/:id' element={<UpdatePack />} />
          {/* 
           -> User Controls Only
          */}
          <Route path="/Userhome" element={<UserHome />} />
          <Route path="/Usernav" element={<UserNavbar />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/auth" element={<AuthService />} />
   
          {/* 
          * Waasher Controls Only
          
          */}
          <Route path="/WasherProfile" element={<WasherProfile />} />
          <Route path="/washerhome" element={<WasherHome />} />
          <Route path="/washer" element={<Washer />} />
          <Route path="/washerlog" element={<WasherLogin/>} />
          <Route path="/washerNav" element={<WasherNavbar />} />
          <Route path='/Order/:id' element={<DeleteOrder/>}/>
          <Route path='/Washer/:id' element={<DeleteWasher/>}/>
          <Route path='/washersignUp' element={<WashersignUp/>}/>

          {/* 
            For Admin Control only
          */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlog" element={<AdminLog />} />
          <Route path="/admin_home" element={<AdminHome />} />
          <Route path="/admin_nav" element={<AdminNavbar />} />
          <Route path="/orders" element={<AdminOrders/>}/>
          <Route path="/acceptOrder" element={<AcceptOrder/>}/>
          <Route path="/admin_pack" element={<Adminpack/>} />
        </Routes>
      </Router>
      <Router></Router>
    </>
  );
}

export default App;
