import '../styles/HomePage.css'
import Profile from '../components/Profile'
import newsImage from '../assets/news.png'
import timer from '../assets/timer.png'
import weather from '../assets/weather.png'
import Notes from '../components/Notes'
import { useState } from 'react'

function HomePage() {
    const [active, setActive] = useState(false);
    function handleNote() {
        setActive(!active)
    }

    return (
        <div className="homepage">
            <div className="left">
                <div className='firstPart'>
                    <div className='secondPart'>
                        <Profile />
                        <img src={weather} alt="" />
                    </div>
                    <Notes isActive={active} onClick={handleNote} />
                </div>
                <div className='timer'>
                    <img src={timer} alt="" />
                </div>
            </div>
            <div className="news">
                <img src={newsImage} alt="" />
            </div>
        </div>
    )
}

export default HomePage
