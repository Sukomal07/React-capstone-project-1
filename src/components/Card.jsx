function Card({ name, image, bgColor, isSelected, onClick }) {
    const cardStyle = {
        backgroundColor: bgColor,
        border: isSelected ? '5px solid #085c00' : 'none'
    };
    return (
        <div className='cardDiv' style={cardStyle} onClick={onClick}>
            <p>{name}</p>
            <img src={image} alt="image" />
        </div>
    )
}

export default Card
