import info from '../assets/info.png'

function SelectError() {
    return (
        <span className="selectError">
            <img src={info} alt="info" width={20} />
            Minimum 3 category required
        </span>
    )
}

export default SelectError
