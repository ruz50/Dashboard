import React, { useState } from 'react'

const SlideMenu = ({sideMenu,openSideMenu, mode, setMode}) => {
  // State
  const [color, setColor] = useState('default')
  const [layout, setLayout] = useState('horizontal')
  const [ltWid, setLdWid] = useState('box')
  const [tpBar, setTpBar] = useState('dark')

  return (
    <div className='absolute h-410 bottom-0 top-0 right-0 bg-[#2a3142] w-70 z-50'>
      <div className='px-3 py-4'>
        <a
          href='/'
          onClick={openSideMenu()}
          className='float-right bg-[#384158] rounded-[50%] text-[#e9ecef] h-[24px] leading-[24px] text-center w-[24px] flex justify-center items-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='#ffffffb3'
            viewBox='0 0 16 16'
          >
            <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
          </svg>
        </a>

        <span className='text-[16px] font-bold text-[white]'>Settings</span>
      </div>

      <hr className='border-[1px] border-[#adb5bd]' />

      <div className='p-6'>
        <div className=''>
          <div className='frst-slc'>
            <span className='mb-[8px] block text-[15px] text-[#adb5bd]'>
              Select Custom Colors
            </span>

            <input
              type='radio'
              id='color-default'
              name='colorType'
              checked={color === 'default'}
              onChange={() => setColor('default')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='color-default'
              className={`border-[none] mb-[8px] mr-1 text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${color === 'default' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Default
            </label>

            <input
              type='radio'
              id='color-red'
              name='colorType'
              checked={color === 'red'}
              onChange={() => setColor('red')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='color-red'
              className={`border-[none] mr-1 mb-[8px]  text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${color === 'red' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Red
            </label>
            <input
              type='radio'
              id='color-teal'
              name='colorType'
              checked={color === 'teal'}
              onChange={() => setColor('teal')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='color-teal'
              className={`border-[none] mr-1 text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${color === 'teal' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Teal
            </label>
          </div>
        </div>

        <div className=''>
          <div className='frst-slc'>
            <span className='mb-[8px] block text-[15px] text-[#adb5bd]'>
              Layouts
            </span>

            <input
              type='radio'
              name='layout'
              id='layout-vertical'
              checked={layout === 'vertical'}
              onChange={() => setLayout('vertical')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='layout-vertical'
              className={`border-[none] mb-[8px] mr-1 text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${layout === 'vertical' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Vertical
            </label>

            <input
              type='radio'
              name='layout'
              id='layout-horizontal'
              checked={layout === 'horizontal'}
              onChange={() => setLayout('horizontal')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='layout-horizontal'
              className={`border-[none] mr-1 mb-[8px]  text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${layout === 'horizontal' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Horizontal
            </label>
          </div>
        </div>

        <div className=''>
          <div className='frst-slc'>
            <span className='mb-[8px] block text-[15px] text-[#adb5bd]'>
              Mode
            </span>

            <input
              type='radio'
              id='mode-light'
              name='mode'
              checked={mode === 'light'}
              onChange={() => setMode('light')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='mode-light'
              className={`border-[none] mb-[8px] mr-1 text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${mode === 'light' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Light
            </label>

            <input
              type='radio'
              id='mode-dark'
              name='mode'
              checked={mode === 'dark'}
              onChange={() => setMode('dark')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='mode-dark'
              className={`border-[none] mr-1 mb-[8px] text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${mode === 'dark' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Dark
            </label>
          </div>
        </div>

        <hr className='border-[1px] border-[#adb5bd]' />

        <div className=''>
          <div className='frst-slc'>
            <span className='mb-[8px] block text-[15px] text-[#adb5bd]'>
              Layout Width
            </span>

            <input
              type='radio'
              id='lt-fluid'
              name='ltWid'
              checked={ltWid === 'fluid'}
              onChange={() => setLdWid('fluid')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='lt-fluid'
              className={`border-[none] mr-1 mb-[8px] text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${ltWid === 'fluid' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Fluid
            </label>

            <input
              type='radio'
              id='lt-box'
              name='ltWid'
              checked={ltWid === 'box'}
              onChange={() => setLdWid('box')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='lt-box'
              className={`border-[none] mb-[8px] mr-1 text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${ltWid === 'box' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Boxed
            </label>
          </div>
        </div>

        <hr className='border-[1px] border-[#adb5bd]' />
        <div className=''>
          <div className='frst-slc'>
            <span className='mb-[8px] block text-[15px] text-[#adb5bd]'>
              Topbar Theme
            </span>

            <input
              type='radio'
              id='tpBar-light'
              name='tpBar'
              checked={tpBar === 'light'}
              onChange={() => setTpBar('light')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='tpBar-light'
              className={`border-[none] mb-[8px] mr-1 text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${tpBar === 'light' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
            >
              Light
            </label>

            <input
              type='radio'
              id='tpBar-dark'
              name='tpBar'
              checked={tpBar === 'dark'}
              onChange={() => setTpBar('dark')}
              className='opacity-0 fixed w-[0]'
            />
            <label
              htmlFor='tpBar-dark'
              className={`border-[none] mr-1 mb-[8px]  text-[#fff] rounded-[4px] cursor-pointer inline-block text-[14px] px-[10px] py-[5px]
              ${tpBar === 'dark' ? 'bg-[#7a6fbe]' : 'bg-[#dee2e6]'}`}
              
            >
              Dark
            </label>
          </div>
        </div>

        <div>
            <span className='mb-[8px] block text-[13px] text-[white] text-center text-[bold] '>
              Choose Layouts
            </span>
            <img src="/layout-1.jpg" alt="" className='w-58 p-1 border-[1px] border-[solid] border-[#3a445b] mb-2'/>
            <img src="/layout-2.jpg" alt="" className='w-58 p-1 border-[1px] border-[solid] border-[#3a445b] mb-2'/>
        </div>
      </div>
    </div>
  )
}

export default SlideMenu
