import React from "react";
import Sidebar from '../components/SideBarrrr';

function Dashboard() {
  return (
    <div className='flex flex-row w-screen h-[100vh] bg-page-col '>
      <Sidebar />
      <div className="bg-dash-col h-screen w-full rounded-tl-[30px] rounded-bl-[30px]"></div>
    </div>
  );
}

export default Dashboard;
