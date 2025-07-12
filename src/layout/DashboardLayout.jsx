import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function DashboardLayout() {
    const [isSidebarOpen,setIsSidebarOpen] = useState(true);
  const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div className="flex min-h-screen">
        <div>
          <Sidebar isSidebarOpen={isSidebarOpen} className={`${isSidebarOpen ? "block" : "hidden"} md:block`} />

        </div>

      <div className="flex flex-col flex-1">

      <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 overflow-y-auto bg-white">
          <Outlet />
        </main>
           <footer className="bg-gray-200">
        <Footer />
      </footer>
      </div>
   
    </div>
  );
}

export default DashboardLayout;
