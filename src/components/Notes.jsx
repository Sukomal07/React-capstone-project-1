import { useState, useEffect } from "react";

function Notes() {
    const [isActive, setIsActive] = useState(false);
    const [noteText, setNoteText] = useState("");
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function handleClick() {
        setIsActive(!isActive);
        if (isActive && noteText.trim() !== "") {
            setNotes([...notes, noteText]);
            setNoteText("");
        }
    }

    const handleNoteChange = (event) => {
        setNoteText(event.target.value);
    };

    return (
        <div className="notes">
            <div className="heading">
                <h1>All Notes</h1>
                <span onClick={handleClick}>Add note</span>
            </div>
            {isActive ? (
                <textarea
                    name="note"
                    id="note"
                    autoFocus
                    placeholder="Write here"
                    value={noteText}
                    onChange={handleNoteChange}
                ></textarea>
            ) : (
                <div className="notesContainer">
                    {notes.map((note, index) => (
                        <p key={index}>{note}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Notes;
