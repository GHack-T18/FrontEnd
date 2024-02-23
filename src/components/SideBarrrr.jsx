// Content component (content.js)
import React, { Fragment, useState ,useContext,useEffect} from "react";
import dashboard from '../assets/Dashboard.svg';
import Cdashboard from '../assets/DashboardColored.svg'
import DashboardColored from '../assets/DashboardColored.svg';
import Message from '../assets/Message.svg';
import CMessage from '../assets/CMessage.svg';
import Setting from '../assets/Setting.svg';
import CSetting from '../assets/CSetting.svg'
import User from '../assets/2User.svg'
import CUser from '../assets/C2User.svg'
import Chat from '../assets/Chat.svg'
import CChat from '../assets/CChat.svg';
import Logout from '../assets/Logout.svg';
import CLogout from '../assets/CLogout.svg';
import { Link } from 'react-router-dom';


function Sidebar() {
    const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='flex flex-col w-16 items-center h-[100vh] space-y-16 bg-page-col '>
        <div className="text-sidebar mt-16">
            <h1>Logooo</h1>
        </div>
      <ul className="flex flex-col space-y-10 justify-center items-center">
      <li className="justify-center items-center group " onClick={() => setSelectedItem('dashboard')}>
                    <img src={selectedItem === 'dashboard' ? Cdashboard : dashboard} className="group-hover:hidden" alt="Dashboard" />
                    <img src={DashboardColored} className="group-hover:block hidden " alt="Dashboard Colored" />
                </li>
                <li className="justify-center items-center group" onClick={() => setSelectedItem('message')}>
                    <img src={selectedItem === 'message' ? CMessage : Message} className="group-hover:hidden" alt="Message" />
                    <img src={CMessage} className="group-hover:block hidden" alt="Message Colored" />
                </li>
                <Link to="/Chat" >
                <li className="justify-center items-center group" onClick={() => setSelectedItem('chat')}>
                    <img src={selectedItem === 'chat' ? CChat : Chat} className="group-hover:hidden" alt="Chat" />
                    <img src={CChat} className="group-hover:block hidden" alt="Chat Colored" />
                </li> </Link>
                <li className="justify-center items-center group" onClick={() => setSelectedItem('User')}>
                    <img src={selectedItem === 'User' ? CUser : User} className="group-hover:hidden" alt="User" />
                    <img src={CUser} className="group-hover:block hidden" alt="User Colored" />
                </li>
        <li className="justify-center items-center group" onClick={() => setSelectedItem('Setting')}>
                    <img src={selectedItem === 'Setting' ? CSetting : Setting} className="group-hover:hidden" alt="Setting" />
                    <img src={CSetting} className="group-hover:block hidden" alt="Setting Colored" />
                </li>
        </ul>
<ul>
<li className="justify-center items-center group mt-16" onClick={() => setSelectedItem('logout')}>
                    <img src={selectedItem === 'logout' ? CLogout : Logout} className="group-hover:hidden" alt="Logout" />
                    <img src={CLogout} className="group-hover:block hidden" alt="Logout Colored" />
                </li>
</ul>
    </div>
  );
}

export default Sidebar;
