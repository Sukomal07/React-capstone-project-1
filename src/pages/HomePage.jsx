import '../styles/HomePage.css'
import Profile from '../components/Profile'
import timer from '../assets/timer.png'
import Notes from '../components/Notes'
import News from '../components/News'
import Weather from '../components/Weather'

function HomePage() {
    return (
        <div className="homepage">
            <div className="left">
                <div className='firstPart'>
                    <div className='secondPart'>
                        <Profile />
                        <Weather />
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
