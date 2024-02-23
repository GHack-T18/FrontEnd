import React from "react";
import Sidebar from '../components/SideBarrrr';
import { LittleSideBar } from "../components/LittleSideBar";
import My from '../assets/My.png';



function Dashboard() {
  return (
    <div className='flex flex-row w-screen h-[100vh] bg-page-col '>
      <Sidebar />
      <div className="bg-dash-col h-screen w-full rounded-tl-[30px] rounded-bl-[30px]">
      <LittleSideBar Name="Ikram Debbih" img={My} />
      </div>
    </div>
  );
}

export default Dashboard;
