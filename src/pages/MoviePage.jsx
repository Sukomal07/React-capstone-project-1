import profilePhoto from '../assets/profilePhoto.png'
import MovieCard from '../components/MovieCard';
import cardData from '../helper/movieCard';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Movie.css'
function MoviePage() {
    const category = JSON.parse(localStorage.getItem("allCategory"));
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='header'>
                <Link to={'/'} className='title'>Supper app</Link>
                <img src={profilePhoto} alt="photo" onClick={() => navigate("/")} />
            </div>
            <div className="movieContainer">
                <p>Entertainment according to your choice</p>
                {category?.map((element, index) => {
                    const cardItem = cardData.find(item => item.name === element);
                    if (cardItem) {
                        return <MovieCard key={index} genre={element} id={cardItem.id} />;
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default MoviePage
