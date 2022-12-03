// import React, { useContext } from 'react'
// import ReactDOM from 'react-dom'
import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./pages/single/single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
// import { Routes } from '@mui/material';
import { useContext } from 'react';
import { Context }  from "./Context/Context"
import AboutPage from "./pages/About";


function App(){
  // const user = true;
  const { user } = useContext(Context)
  return(
    // <Router>
    //   <TopBar/>
    //   {/* <Routes>
    //     <Route path='/'><Home/></Route>
    //     <Route path='/register'>{user ? <Home/> : <Register/>}</Route>
    //     <Route path='/login'>{user ? <Home/> : <Login/>}</Route>
    //     <Route path='/write'>{user ? <Write/> : <Register/>}</Route>
    //     <Route path='/setting'>{user ? <Setting/> : <Register/>}</Route>
    //     <Route path='/post/:postid'><Single/></Route>
    //   </Routes> */}
    // </Router>
    <BrowserRouter>
    <TopBar/>
      <Routes>
        <Route path="/" element={user? <Home />:<Register/>}></Route>        
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/write" element={<Write/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:id" element={<Single/>} />        
      </Routes>
    </BrowserRouter>
  );    
}
export default App; 