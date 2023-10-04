import '../styles/SelectChoice.css'
// import Category from '../components/Category'
import Card from '../components/Card'
import cardData from '../helper/movieCard'
// import SelectError from '../components/SelectError'
function SelectChoice() {
    return (
        <div className="selectPage">
            <div className="rightDiv">
                <h2>Super app</h2>
                <h1>Choose your entertainment catagory</h1>
                <div className="categoryList">
                    {/* <Category bgColor={"#085c00"} name={"Action"} showIcon={true} /> */}
                </div>
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
            <button className='next'>Next page</button>
        </div>
    )
}

export default SelectChoice
