function Category({ name, bgColor, showIcon }) {
    return (
        <div className="category" style={{ backgroundColor: bgColor }}>
            <p>{name}</p>
            {
                showIcon && (
                    <span>X</span>
                )
            }
        </div>
    )
}

export default Category
