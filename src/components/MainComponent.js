import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'  ;
import {faPlay, faPause, faBackward, faForward} from '@fortawesome/free-solid-svg-icons'
export default function MainComponent() {
  return (
    <main>
        <div className='container'>
            <div className='row mt-4 d-flex justify-content-center align-items-center'>
                <div className='song-card col-sm-5'>
                    <div className='song-title'>
                        <h1>
                            Title
                        </h1>
                    </div>
                    <div className='song-photo'>
                        <img src='https://ecsmedia.pl/c/heroes-villains-b-iext143782959.jpg'  />
                    </div>
                    <div className='song-duration'>
                        <span>
                            <input type='range'/>
                        </span>
                        <p>
                            0:00
                        </p>
                    </div>
                    <div className='buttons'>
                        <FontAwesomeIcon icon={faBackward}/>
                        <FontAwesomeIcon icon={faPlay}/>
                        <FontAwesomeIcon icon={faForward}/>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
