import React from 'react'
import './Header.css'

export default function Header() {

  return (
    <div className='Header-contaner'>
    <div className='Header'>
        <div className='logo-contaner'>Header</div>
        <div className='list-contaner'>
            <ul className='Header-ul'>
                <li className='Header-li'>
                        <a href='#'>
                        Home
                        </a>
                </li>
                <li className='Header-li'>
                        <a href='#'>
                        menu
                        </a>
                </li>
                <li className='Header-li'>
                        <a href='#'>
                        about us
                        </a>
                </li>
                <li className='Header-li'>
                        <a href='#'>
                        contact
                        </a>
                </li>
            </ul>
        </div>
    </div>
    </ div>
  )
}
