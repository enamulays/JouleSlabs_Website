import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardRight from './components/DashboardRight'
import Sidebar from './components/Sidebar'
import UserSection from './components/UserSection';
import TableSection from './components/TableSection';
import TypoGraphySection from './components/TypoGraphySection';
import IconSection from './components/IconSection';
import MapSection from './components/MapSection';
import NotificationSection from './components/NotificationSection';
import './tailwind.css'



function App() {
  const [nav, setNav] = useState(true);
  const navToggle = () => {
    setNav(!nav)
  }
  return (<>
    <BrowserRouter>
      <Sidebar nav={nav} navToggle={navToggle} />
      <Routes>
        <Route path='/' element={<DashboardRight nav={nav} />}></Route>
        <Route path='/user' element={<UserSection nav={nav}/>}></Route>
        <Route path='/table' element={<TableSection nav={nav}/>}></Route>
        <Route path='/typography' element={<TypoGraphySection nav={nav}/>}></Route>
        <Route path='/icons' element={<IconSection nav={nav}/>}></Route>
        <Route path='/maps' element={<MapSection nav={nav}/>}></Route>
        <Route path='/notification' element={<NotificationSection nav={nav}/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
