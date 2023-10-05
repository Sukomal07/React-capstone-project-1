import '../styles/HomePage.css'
import Profile from '../components/Profile'
import timer from '../assets/timer.png'
import weather from '../assets/weather.png'
import Notes from '../components/Notes'
import News from '../components/News'

function HomePage() {
    return (
        <div className="homepage">
            <div className="left">
                <div className='firstPart'>
                    <div className='secondPart'>
                        <Profile />
                        <img src={weather} alt="" />
                    </div>
                    <Notes />
                </div>
                <div className='timer'>
                    <img src={timer} alt="" />
                </div>
            </div>
            <News />
        </div>
    )
}

export default HomePage
