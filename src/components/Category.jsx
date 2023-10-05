function Category({ name, bgColor, showIcon, onClick }) {
    return (
        <div className="category" style={{ backgroundColor: bgColor }}>
            <p>{name}</p>
            {
                showIcon && (
                    <span onClick={onClick}>X</span>
                )
            }
        </div>
    )
}

export default Category
