import React, { useState } from 'react'
import SlideMenu from '../SlideMenu/SlideMenu'

const TopHeader = ({ mode, setMode, mobMenu, setMobMenu }) => {
  // languages array
  const languages = [
    { name: 'Spanish', img: '/languages/spanish.jpeg', selected: false },
    { name: 'German', img: '/languages/germany.jpeg', selected: false },
    { name: 'Italian', img: '/languages/italy.jpeg', selected: false },
    { name: 'Russian', img: '/languages/russia.jpeg', selected: false },
    { name: 'English', img: '/languages/usa.jpeg', selected: true }
  ]

  // States
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(languages)
  const [sideMenu, setSideMenu] = useState(false)

  // Language logic
  const selectedLang = lang.find(l => l.selected)

  const selLang = name => {
    setLang(prev => prev.map(l => ({ ...l, selected: l.name === name })))
    setOpen(false)
  }

  const openSideMenu = () => {
    setSideMenu(prev => !prev)
  }

  const openMobMenu = ()=>{
    setMobMenu(prev=>!prev)
  }

  return (
    <div className='max-w-[90%] px-[20px] mx-auto flex items-center justify-between whitespace-nowrap px-12 h-[70px] '>
      <div className='flex items-center gap-4'>
        {/* dark */}
        {mode === 'dark' && (
          <>
            <img
              src='/light-small-logo.png'
              className='block md:hidden h-[19px]'
              alt=''
            />
            <img
              src='/light-logo.png'
              className='hidden md:block h-[19px]'
              alt=''
            />
          </>
        )}

        {/* light */}
        {mode === 'light' && (
          <>
            <img
              src='/small-dark-logo.png'
              className='block md:hidden h-[19px]'
              alt=''
            />
            <img
              src='/dark-logo.png'
              className='hidden md:block h-[19px]'
              alt=''
            />
          </>
        )}
      </div>
      <div className='md:hidden' onClick={openMobMenu}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
          />
        </svg>
      </div>
      <div className='flex items-center gap-4 text-[var(--text-header)]'>
        <div className='relative w-[380px] max-md:hidden'>
          <input
            type='text'
            placeholder='Search...'
            className='w-full h-[38px] border-[none] rounded-[30px] pl-[20px] pr-[40px] bg-[#ffffff1a] text-[var(--text-header)] pt-[6px] pb-[6px]'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='var(--text-header)'
            viewBox='0 0 16 16'
            className='absolute right-[16px] top-1/2 -translate-y-1/2 text-gray-400 text-[13px] z-10'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
          </svg>
        </div>
        <div className='relative'>
          <button
            onClick={() => setOpen(!open)}
            className='flex items-center gap-2 text-[13px] text-[var(--text-header)]'
          >
            <img src={selectedLang.img} className='h-4' alt='' />
            {selectedLang.name}
            <svg width='13' height='13' fill='currentColor'>
              <path d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6z' />
            </svg>
          </button>

          {open && (
            <div className='absolute right-0 mt-3 w-40 rounded-md bg-[#2b3445] shadow-lg z-50'>
              {lang.map(l => (
                <button
                  key={l.name}
                  onClick={() => selLang(l.name)}
                  className='flex items-center gap-2 px-4 py-2 text-[13px] text-[var(--text-header)] hover:bg-white/10 w-full'
                >
                  <img src={l.img} className='h-4' alt='' />
                  {l.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className='px-1.5 py-3 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='var(--text-header)'
            viewBox='0 0 16 16'
            width={15}
          >
            <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5' />
          </svg>
        </button>

        <div className='relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='var(--text-header)'
            viewBox='0 0 16 16'
          >
            <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6' />
          </svg>
        </div>

        <button>
          <img
            src='/users/mainUser.jpeg'
            className='w-9 h-9 rounded-[50%]'
            alt=''
          />
        </button>

        <div>
          <button onClick={openSideMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='var(--text-header)'
              viewBox='0 0 16 16'
              className='animate-spin'
            >
              <path d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z' />
            </svg>
          </button>
        </div>
        {sideMenu && (
          <SlideMenu
            sideMenu={sideMenu}
            openSideMenu={openSideMenu}
            mode={mode}
            setMode={setMode}
          />
        )}
      </div>
    </div>
  )
}

export default TopHeader
