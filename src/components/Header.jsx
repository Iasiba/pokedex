import React from 'react'
import logo from '../img/logo.png'
const Header = () => {
  return (
    <div>
        <div className='red'>
          <img src={logo} className="logo" alt="" />
        </div>
        <div className='black'>
            <div className='circleblack'>
                <div className='circlewhite'>
                    <div className='circleback'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header