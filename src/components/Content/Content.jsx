import React from 'react'
import { cardsData } from '../../mock/data'
import FirstGraph from './FirstGraph/FirstGraph'
import SecondGraph from './SecondGraph/SecondGraph'
import ThirdGraph from './ThirdGraph/ThirdGraph'
import Card from './Card/Card'
import Orders from './Orders/Orders'

const Content = () => {
  const getChangeColor = (type) => {
    switch (type) {
      case 'up':
        return 'rgba(13,202,240)'
      case 'down':
        return 'rgba(239,103,103)'
      case 'neutral':
        return 'rgba(245,178,37)'
      default:
        return '#9ca3af'
    }
  }

  return (
    <div className="px-10 py-6">
      <div className="flex gap-6 w-[90%] justify-self-center mt-[54px] mb-6 max-lg:flex-wrap">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="relative bg-[#7e76c5] rounded-lg p-6 text-white overflow-hidden w-[25%] bg-[url('bckg.png')] max-lg:w-[100%]"
          >
            <div className="absolute right-0 top-0 w-full h-full opacity-20">
              <svg viewBox="0 0 400 200" preserveAspectRatio="none">
                <path
                  d="M0,100 C150,200 250,0 400,80 L400,0 L0,0 Z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-4 mb-3 font-semibold tracking-wide uppercase">
                    {card.title}
                  </p>
                  <p className="text-[26px] font-bold mb-4">
                    {card.currency ?? ''}
                    {card.value}
                  </p>
                </div>

                <div className="bg-white/20 rounded-full p-3">
                  {CubeIcon}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm">
                <span
                  style={{ backgroundColor: getChangeColor(card.color) }}
                  className="px-2 py-[2px] rounded text-xs font-semibold text-white"
                >
                  {card.change}
                </span>
                <span className="text-white/80">
                  From previous period
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-[90%] justify-self-center justify-between max-lg:flex-wrap'>
        <FirstGraph/>
        <SecondGraph/>
        <ThirdGraph/>
      </div>
      <div className='flex w-[90%] justify-self-center max-lg:flex-wrap'>
        <Card/>
        <Orders />
      </div>
      
      
    </div>
  )
}

const CubeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg>

export default Content
