function Card({ name, image, bgColor }) {
    return (
        <div className='cardDiv' style={{ backgroundColor: bgColor }}>
            <p>{name}</p>
            <img src={image} alt="image" />
        </div>
    )
}

export default Card
