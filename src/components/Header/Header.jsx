import React, { useState } from 'react'
import SlideMenu from './SlideMenu/SlideMenu'
import TopHeader from './TopHeader/TopHeader'
import Dashboard from './Dashboard/Dashboard'

const Header = ({mode,setMode}) => {
  const [mobMenu, setMobMenu] = useState(false)
  return (
    <header className='bg-[var(--bg-header)]'>
      <TopHeader mode={mode} setMode={setMode} mobMenu={mobMenu} setMobMenu={setMobMenu}/>
      <Dashboard mobMenu={mobMenu} setMobMenu={setMobMenu}/>
    </header>
  )
}

export default Header
