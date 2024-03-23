import React from 'react'
import LogoImg from '../../src/Assets/Logo/Logo.png'

function Logo() {
  return (
    <div className=' p-8 flex justify-center'>
        <img src={LogoImg} alt="Logo" className='' />
    </div>
  )
}

export default Logo