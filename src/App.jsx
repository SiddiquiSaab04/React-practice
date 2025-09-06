import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react';
import { GreetingCard } from './components/Cards/GreetingCard';
import { Routes,Route } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/AuthPages/Login';
import ProtectedRoute from './components/protected-Route/ProtectedRoute';
import SearchBar from './components/searchbar/SearchBar';

function App() {
      const [like,setLike] = useState(0);
  
  // const users = ["Laiba", "Hamza", "Sana", "Ahmed", "Zoya"];
  // function handleLike(username){
  //   setLike((prev)=>{
  //    const updated =   prev + 1
  //    alert(`liked by ${username} , ${updated}❤️`)
  //         return updated;

  //   });
  // }
  return (
    <>
    {/* <Navbar toggleSidebar={toggleSidebar} />
    <Sidebar isSidebarOpen={isSidebarOpen}  /> */}
    {/* {users.map((u)=>(
     <GreetingCard user={u} key={u} onLike={handleLike}/>
    ))} */}

   {/* Routing */}
   
  <Routes>
    <Route path='/login' element={<Login/>} />
    <Route element={<ProtectedRoute/>}>
  <Route path='/' element={<DashboardLayout/>} >
    <Route index element={<Home/>} />
       <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path='search' element={<SearchBar/>}/>
    </Route>
    </Route>
  
  </Routes>

    </>
  )
}

export default App
