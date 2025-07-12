import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react';
import { GreetingCard } from './components/Cards/GreetingCard';

function App() {
      const [like,setLike] = useState(0);
  // const [isSidebarOpen,setIsSidebarOpen] = useState(true);
  // const toggleSidebar = () =>{
  //       setIsSidebarOpen(!isSidebarOpen);
  //   }
  const users = ["Laiba", "Hamza", "Sana", "Ahmed", "Zoya"];
  function handleLike(username){
    setLike((prev)=>{
     const updated =   prev + 1
     alert(`liked by ${username} , ${updated}❤️`)
          return updated;

    });
  }
  return (
    <>
    {/* <Navbar toggleSidebar={toggleSidebar} />
    <Sidebar isSidebarOpen={isSidebarOpen}  /> */}
    {users.map((u)=>(
     <GreetingCard user={u} key={u} onLike={handleLike}/>
    ))}
    </>
  )
}

export default App
