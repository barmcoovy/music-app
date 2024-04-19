import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faItunesNote} from '@fortawesome/free-brands-svg-icons'
export default function HeaderComponent() {
  return (
    <div className='container'>
        <div className='row'>
          <header className='col-md-12'>
              <div className="right-header">
                  <h1>Music Player</h1>     
              </div>
              <div className="left-header">
                  <FontAwesomeIcon icon={faItunesNote} className='logo'/>
              </div>
          </header>
        </div>
    </div>
  )
}
