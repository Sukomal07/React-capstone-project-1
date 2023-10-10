import '../styles/HomePage.css'
import Profile from '../components/Profile'
import Notes from '../components/Notes'
import News from '../components/News'
import Weather from '../components/Weather'
import { useNavigate } from 'react-router-dom'
import Timer from '../components/Timer'

function HomePage() {
    const navigate = useNavigate()
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
                    <Timer />
                </div>
            </div>
            <News />
            <button className='browse' onClick={() => navigate('/movie')}>Browse</button>
        </div>
    )
}

export default HomePage
