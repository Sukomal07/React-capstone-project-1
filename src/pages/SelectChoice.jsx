import '../styles/SelectChoice.css'
import Category from '../components/Category'
import Card from '../components/Card'
import cardData from '../helper/movieCard'
import SelectError from '../components/SelectError'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SelectChoice() {
    const navigate = useNavigate();
    const [choices, setChoices] = useState(JSON.parse(localStorage.getItem('allCategory')) || []);
    const [error, setError] = useState(false)
    useEffect(() => {
        if (choices.length < 3) {
            setError(true);
        } else {
            setError(false);
        }
        localStorage.setItem('allCategory', JSON.stringify(choices));
    }, [choices]);

    const handleCardClick = (cardName) => {
        if (!choices.includes(cardName)) {
            setChoices([...choices, cardName]);
        }
    };

    const handleDelete = (cardName) => {
        const updatedChoices = choices.filter((choice) => choice !== cardName);
        setChoices(updatedChoices);
    }

    const handleButton = () => {
        if (!error) {
            navigate('/')
        }
    }

    return (
        <div className="selectPage">
            <div className="rightDiv">
                <h2>Super app</h2>
                <h1>Choose your entertainment catagory</h1>
                <div className="categoryList">
                    {
                        choices.map((choice, index) => (
                            <Category key={index} bgColor={'#085c00'} name={choice} showIcon={true} onClick={() => handleDelete(choice)} />
                        ))
                    }
                </div>
                {error && <SelectError />}
            </div>
            <div className="leftDiv">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        name={card.name}
                        image={card.imageUrl}
                        bgColor={card.bgColor}
                        onClick={() => handleCardClick(card.name)}
                    />
                ))}
            </div>
            <button className='next' onClick={handleButton}>Next page</button>
        </div>
    )
}

export default SelectChoice
