function Card({ name, image, bgColor, onClick }) {
    return (
        <div className='cardDiv' style={{ backgroundColor: bgColor }} onClick={onClick}>
            <p>{name}</p>
            <img src={image} alt="image" />
        </div>
    )
}

export default Card
