import info from '../assets/info.png'
import '../styles/SelectChoice.css'
import Category from '../components/Category'
import Card from '../components/Card'
import cardData from '../helper/movieCard'

function SelectChoice() {
    return (
        <div className="selectPage">
            <div className="rightDiv">
                <h2>Super app</h2>
                <h1>Choose your entertainment catagory</h1>
                <div className="categoryList">
                    <Category name={"Romance"} />
                </div>
                <span className="selectError">
                    <img src={info} alt="info" width={20} />
                    Minimum 3 category required
                </span>
            </div>
            <div className="leftDiv">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        name={card.name}
                        image={card.imageUrl}
                        bgColor={card.bgColor}
                    />
                ))}
            </div>
        </div>
    )
}

export default SelectChoice
