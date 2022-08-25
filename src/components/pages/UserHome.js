import React from 'react';
import '../../App.css';
import Admin from './Admin';
import AdminNavbar from './AdminNab';
import UserNavbar from './UserNavbar';
import UserPack from './UserPack';

function UserHome() {
  return (
    <>
       <UserNavbar/>
       <UserPack/>
    </>
  );
}

export default UserHome;
