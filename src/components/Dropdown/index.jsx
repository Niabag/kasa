import { useState } from 'react'

//import scss
import './Dropdown.scss'

//import image
import vectorDown from '../../assets/image/vectorDown.png'
import vectorUp from '../../assets/image/vectorUp.png'


function Dropdown({title, children, btnAbout, btnLodging, containeurAbout,containeurLodging,content}) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={containeurAbout+" "+containeurLodging}>
      <div className={btnAbout+" "+btnLodging} onClick={(e) => setIsActive(!isActive)}>
        <p className="dropdown-title">{title}</p>
        {isActive && <img className="dropdown-title" src={vectorUp} alt="" />}
        {!isActive && (
          <img className="dropdown-title" src={vectorDown} alt="" />
        )}
      </div>
      {isActive && (
        <div className={content}>
            {children}  
        </div>
      )}
    </div>
  )
}

export default Dropdown
