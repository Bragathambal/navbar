import './App.css';
import Home from './Component/Home';
 import Aboutus from './Component/Aboutus';
 import ContactUs from './Component/ContactUs';
// import User from './Component/User';
 import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
 import Login from './Login';
 import Dashboard from './Dashboard';
import Newpage from './Newpage';
import { useState } from 'react';
import {FiMenu,FiX} from 'react-icons/fi'

function App() {
 const[open,setOpen]=useState(false);
 const hanleClick=()=>setOpen(!open)
 const closeMenu=()=>setOpen(false)

  return (
    <>
        
    
    {/* <div><Link to='/webpage/Home'>Home page</Link></div>
     <div><Link to='/webpage/about'>About page</Link></div>
    <div><Link to='/webpage/contact'>ContactUs</Link> </div>
    <div><Link to='/User/1'>User1</Link> </div>
    <Link to='/User/2'>User2</Link>  
         <div><Link to='/login'>login</Link></div>
    
    
    
       <Route path='/webpage'>
      <Route path='Home' element={<Home />}/>
       <Route path='about' element={<Aboutus />}/>
     <Route path='contact' element={<ContactUs />}/>  
      </Route>
      <Route path='/User/:id' element={<User />} />  
      <div><Link to='/login'>login</Link></div>
      <div><Link to='/Home'>Home</Link></div>*/}


      <BrowserRouter>
      
      
      <div onClick={hanleClick}  className='nav-icons'>
      {open ? <FiX/> :<FiMenu/>}
      </div> 
        <div className={open ? 'nav-links-mob' :'Navbar'}>
      <div className='nav-link'><Link to='/login'>login</Link></div>
      <div className='nav-link'><Link to='/dashboard'>Dashboard</Link></div>
      <div className='nav-link'><Link to='/newpage'>Nextpage</Link></div>
      <div className='nav-link'><Link to='/about'>About</Link></div>
      <Link to='/contact'>Contact</Link>
      </div>
      
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/newpage' element={<Newpage />} />
      <Route path='/about' element={<Aboutus />}/>
     <Route path='/contact' element={<ContactUs />}/> 
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App;
