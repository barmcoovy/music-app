import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube,faFacebook,faXTwitter} from '@fortawesome/free-brands-svg-icons'

export default function FooterComponents() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>

            <div className='footer-left col-sm-8'>
                <p>&copy; Bartosz Miecznikowski 2024 - wszelkie prawa zastrzeżone</p>
            </div>
            <div className='footer-right col-sm-4'>
                <a href='https://youtube.com/' target='_blank'>
                  <FontAwesomeIcon className='icon-yt' icon={faYoutube}  />
                </a>
                <a href='https://facebook.com' target='_blank'>
                  <FontAwesomeIcon className='icon-fb'  icon={faFacebook}/>
                </a>
                <a href='https://twitter.com' target='_blank'>
                  <FontAwesomeIcon className='icon-twitter' icon={faXTwitter}/>
                </a>
            </div>
          </div>
        </div>
    </footer>
  )
}
