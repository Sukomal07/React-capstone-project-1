function Notes({ isActive, text, onClick }) {
    return (
        <div className="notes">
            <div>
                <h1>All Notes</h1>
                <span onClick={onClick}> + Add note</span>
            </div>
            {
                isActive ? (
                    <textarea name="note" id="note" autoFocus placeholder="Write here"></textarea>
                ) : (
                    <p>{text}</p>
                )
            }
        </div>
    )
}

export default Notes
