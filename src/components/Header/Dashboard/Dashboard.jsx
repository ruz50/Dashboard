import React from 'react'

const Dashboard = ({mobMenu}) => {
  return (
    <div className="bg-[#2a3142] w-full text-white h-[150px]">

      <div className="px-10 py-6 flex justify-between w-[90%] items-center justify-self-center">
        <div>
          <h1 className="text-xl font-medium">Dashboard</h1>
          <div className="flex items-center text-sm text-[#adb5bd] mt-1">
            <span>Lexa</span>
            <span className="mx-2">{'>'}</span>
            <span>Dashboard</span>
          </div>
        </div>

        <div className="flex gap-10 max-md:hidden">
          <MiniChart color="rgb(41, 187, 227)" label="Item Sold" value="1230" />
          <MiniChart color="rgb(122, 111, 190)" label="Balance" value="$ 2,317" />
        </div>
      </div>

      <div className="max-md:hidden bg-[var(--cards-color)] mx-10 rounded-lg ">
        <div className="flex justify-between px-6 py-5">
          <NavItem active label="Приборная панель">
            <DashboardSvg />
          </NavItem>
          <NavItem label="Электронное письмо">
            <MailSVG />
          </NavItem>
          <NavItem label="Элементы интерфейса">
            <BagSVG />
          </NavItem>
          <NavItem label="формы">
            <ReceiptSVG />
          </NavItem>
          <NavItem label="More">
            <ListSVG />
          </NavItem>
          <NavItem label="Графики">
            <PieSVG />
          </NavItem>
          <NavItem label="Pages">
            <BagSVG />
          </NavItem>

        </div>
      </div>

      {/* mobile menu */}
      {mobMenu && (
  <div className="md:hidden bg-[var(--cards-color)] w-[100%] z-50 rounded-lg absolute top-[70px]">
    <div className="flex justify-between px-6 py-5 flex-col w-[100%] gap-5">
          <NavItemMob active label="Приборная панель">
            <DashboardSvg />
          </NavItemMob>
          <NavItemMob label="Электронное письмо">
            <MailSVG />
          </NavItemMob>
          <NavItemMob label="Элементы интерфейса">
            <BagSVG />
          </NavItemMob>
          <NavItemMob label="формы">
            <ReceiptSVG />
          </NavItemMob>
          <NavItemMob label="More">
            <ListSVG />
          </NavItemMob>
          <NavItemMob label="Графики">
            <PieSVG />
          </NavItemMob>
          <NavItemMob label="Pages">
            <BagSVG />
          </NavItemMob>

        </div>
  </div>
)}

    </div>
  )
}

export default Dashboard

const MiniChart = ({ color, label, value }) => {
  const bars = [27, 15, 3, 21, 39, 51, 21, 3, 33, 51, 57, 45, 51]

  return (
    <div>
      <svg viewBox="0 0 240 60" preserveAspectRatio="none" width="101" height="32">
        <g transform="scale(1,-1)">
          {bars.map((h, i) => (
            <rect
              key={i}
              x={-3.75 + i * 19.5}
              y="-60"
              width="8.5"
              height={h}
              style={{
                strokeWidth: 5,
                stroke: color,
                fill: color,
              }}
            />
          ))}
        </g>
      </svg>
      <div className="text-sm text-[#adb5bd] mt-1">
        {label} {value}
      </div>
    </div>
  )
}

const NavItem = ({ children, label, active }) => (
  <div
    className={`flex flex-col items-center gap-2 w-[120px]
      ${active ? 'text-[#8b7cf8]' : 'text-[var(--cards-text)]'}
    `}
  >
    <div className="opacity-100 w-5 h-5">
      {children}
    </div>

    <span className="text-sm text-center leading-tight">
      {label}
    </span>
  </div>
)

const NavItemMob = ({ children, label, active }) => (
  <div
    className={`flex flex-col items-center gap-2 w-[100%]
      ${active ? 'text-[#8b7cf8]' : 'text-[var(--cards-text)]'}
    `}
  >
    <div className="opacity-100 w-5 h-5">
      {children}
    </div>

    <span className="text-sm text-center leading-tight">
      {label}
    </span>
  </div>
)
/* Svg*/

const DashboardSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
  <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/>
</svg>
)

const MailSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
)

const BagSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
)

const ReceiptSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/>
  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
</svg>
)

const ListSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
</svg>
)

const PieSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
</svg>
)
